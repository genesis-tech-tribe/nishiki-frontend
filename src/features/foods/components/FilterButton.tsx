'use client';

import { FilterIcon } from '@/assets/images/icons';
import {
  Button,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  Icon,
  SearchInput,
} from '@/components/ui';
import { foodCategories } from '@/const/foodCategory';

import { Route } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { CategoryBadge } from '.';
import { FoodFilterCategoryDrawer } from './FoodFilterCategoryDrawer';

export const FilterButton = ({
  containers,
  containerIdMap,
  groupIdMap,
}: {
  containers: Record<string, string[]>;
  containerIdMap: { [key: string]: string };
  groupIdMap: { [key: string]: string };
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedContainer, setSelectedContainer] = useState('');
  const [query, setQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<{ [key: string]: boolean }>({});
  useEffect(() => {
    setSelectedGroup(searchParams?.get('group') || '');
    setSelectedContainer(searchParams?.get('container') || '');
    setQuery(searchParams?.get('query') || '');
    const initialCategory: { [key: string]: boolean } = {};
    (searchParams?.get('category') || '').split(',').forEach((item) => {
      if (!item) return;
      initialCategory[item] = true;
    });
    setSelectedCategories(initialCategory);
  }, [searchParams]);

  const handleFilter = () => {
    const params = new URLSearchParams(searchParams);

    // helper method for update params
    const updateSearchParams = (paramName: string, value: string) => {
      if (value && value.length > 0) {
        params.set(paramName, value);
      } else {
        params.delete(paramName);
      }
    };

    // Update Each parameters
    updateSearchParams('group', selectedGroup);
    updateSearchParams('container', selectedContainer);

    const concatedSelectedCategories = Object.entries(selectedCategories)
      .filter(([, value]) => value)
      .map(([key]) => key)
      .join(',');

    updateSearchParams('category', concatedSelectedCategories);
    updateSearchParams('query', query);

    replace(`${pathname}?${params.toString()}` as Route);
  };

  const handleClear = () => {
    setSelectedGroup('');
    setSelectedContainer('');
    setSelectedCategories({});
    setQuery('');
  };

  const toggleCategory = (key: string) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSelectGroup = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGroup(event.target.value);
  };
  const handleSelectContainer = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedContainer(event.target.value);
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <DrawerRoot open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <button className="flex justify-center items-center absolute top-0 right-1 h-12 w-12">
          <Icon icon={FilterIcon} size={4} className="justify-center" />
        </button>
      </DrawerTrigger>
      <DrawerContent side="bottom">
        <DrawerHeader>
          <DrawerTitle>Filter Food</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <SearchInput
            placeholder="Search Foods..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          Filter
          <label>Group :</label>
          <select
            name="groups"
            onChange={(event) => handleSelectGroup(event)}
            id="groups"
            value={selectedGroup}
          >
            <option key="any" value="">
              Select a Group
            </option>
            {Object.keys(containers).map((group) => (
              <option key={group} value={group}>
                {groupIdMap[group]}
              </option>
            ))}
          </select>
          <label>container :</label>
          <select
            name="containers"
            onChange={(event) => handleSelectContainer(event)}
            id="containers"
            value={selectedContainer}
          >
            <option key="any" value="">
              Select a Container
            </option>
            {Object.entries(containers).map(([group, containers]) => (
              <React.Fragment key={group}>
                {group}
                {containers.map((container) => (
                  <option key={container} value={container}>
                    {containerIdMap[container]}
                  </option>
                ))}
              </React.Fragment>
            ))}
          </select>
          <FoodFilterCategoryDrawer
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
          />
          <div className="flex flex-wrap gap-1.5 whitespace-nowrap">
            {Object.entries(selectedCategories)
              .filter(([, value]) => {
                return value;
              })
              .map(([key]) => {
                return (
                  <CategoryBadge
                    key={key}
                    emoji={foodCategories[key]?.emoji}
                    text={foodCategories[key]?.name}
                    onCrossClick={() => toggleCategory(key)}
                  ></CategoryBadge>
                );
              })}
          </div>
        </DrawerBody>
        <DrawerFooter>
          <Button variant="cancel" size="sm" onClick={() => handleClear()}>
            All clear
          </Button>
          <DrawerClose asChild>
            <Button variant="primary" size="sm" onClick={() => handleFilter()}>
              Apply
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
};