# @aslamhus/fileicon

Create a file icon image with any file extension.

## Installation

`npm install @aslamhus/fileicon`

---

## Basic Usage

Draw a file icon with a a jpg extension. The default theme is greyscale.

    import FileIcon from 'FileIcon'
    const fileIcon = new FileIcon()
    fileIcon.create('jpg').then((icon) => {
        document.body.append(icon);
    });

the `create` method returns a `Promise` that resolves to an `img element`.

---

## Themes

To use a color theme, you can pass a theme name to the `FileIcon` `constructor`

    const fileIcon = new FileIcon({ theme: 'purple' })

or use the `setColorTheme` method.

    fileIcon.setColorTheme('purple')

Currently there are the following themes supported:

| Name                | Solid                                | Outline (add '-outline')                             |
| ------------------- | ------------------------------------ | ---------------------------------------------------- |
| greyscale (default) | ![greyscale](./images/greyscale.png) | ![greyscale-outline](./images/greyscale-outline.png) |
| black               | ![black](./images/black.png)         | ![black-outline](./images/black-outline.png)         |
| white               | ![white](./images/white.png)         | ![white-outline](./images/white-outline.png)         |
| red                 | ![red](./images/red.png)             | ![red-outline](./images/red-outline.png)             |
| purple              | ![purple](./images/purple.png)       | ![purple-outline](./images/purple-outline.png)       |
| blue                | ![blue](./images/blue.png)           | ![blue-outline](./images/blue-outline.png)           |
| lightBlue           | ![lightBlue](./images/lightBlue.png) | ![lightBlue-outline](./images/lightBlue-outline.png) |
| green               | ![green](./images/green.png)         | ![green-outline](./images/green-outline.png)         |
| yellow              | ![yellow](./images/yellow.png)       | ![yellow-outline](./images/yellow-outline.png)       |
| orange              | ![orange](./images/orange.png)       | ![orange-outline](./images/orange-outline.png)       |

---

## Colors

To add your own custom colors, you can pass a color object into the `FileIcon` `constructor` or use the `setColors` method.

    const colors = {
        bg: 'transparent',
        iconBg: 'coral',
        textBg: 'rgba(250,250,250,0.2)',
        text: '#FFF',
        outline: 'white',
    };
    const fileIcon = new FileIcon({ colors: colors })

_Note that you can use **Hexcolor**, a **color name** or an **rgb value**_

This will produce a file icon like so:

![custom colors file icon](./images/ex1.png)

## Deployment

### NPM

    require('@aslamhus/fileicon')

### ES6

    import 'FileIcon' from '@aslamhus/fileicon'

### No Module Bundler

    // for regular script
    <script src='./lib/FileIcon.js'></script>
    <script>
        const FileIcon = window.FileIcon.default;
        const fileIcon = new FileIcon()
    </script>

    // for script type module
    <script type='module'>
        import FileIcon from './dist/FileIcon.mjs'
        const fileIcon = new FileIcon()

    </script>

## Sample Tests

See [test.html](../test/test.html) for more examples

## License

This project is licensed under the [MIT license](../LICENSE.md)
see the [LICENSE.md](../LICENSE.md) file for details
