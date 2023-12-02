## Steps to create new icon

1. Check if the icon you need is already existing in **src/components/icon/icons** directory.
2. Make it sure to understand which icon is used in wireframe, and copy the SVG of it from there.
3. Copy the SVG and create a new component under **src/components/icon/icons** directory with the icon.
4. Please follow how the existing icon components are structured when you're creating new one.

### Memo

- First I tried to use [iconify/react](https://iconify.design/docs/icon-components/react/), but it wasn't fully customizable. "HomeSmile" icon doesn't accept "stroke" and "fill", "profile" icon doesn't accept "fill". So decided to use inline-svg.
- Size of icon is defined in **src/components/icon/config**. You can pass "size" prop to icon component and change the size.
- Default is set to be size "md", which is "w-8 h-8"
- You can also change the size or other styling by adding className.