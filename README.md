# @aslamhus/fileicon

Create a file icon image with any file extension.

## Installation

`npm install @aslamhus/fileicon`

## Git repo

`git clone https://github.com/aslamhus/fileicon`

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

| Name                | Solid                                                                                           | Outline (add '-outline')                                                                                        |
| ------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| greyscale (default) | ![greyscale](https://github.com/aslamhus/fileicon/blob/main/docs/images/greyscale.png?raw=true) | ![greyscale-outline](https://github.com/aslamhus/fileicon/blob/main/docs/images/greyscale-outline.png?raw=true) |
| black               | ![black](https://github.com/aslamhus/fileicon/blob/main/docs/images/black.png?raw=true)         | ![black-outline](https://github.com/aslamhus/fileicon/blob/main/docs/images/black-outline.png?raw=true)         |
| white               | ![white](https://github.com/aslamhus/fileicon/blob/main/docs/images/white.png?raw=true)         | ![white-outline](https://github.com/aslamhus/fileicon/blob/main/docs/images/white-outline.png?raw=true)         |
| red                 | ![red](https://github.com/aslamhus/fileicon/blob/main/docs/images/red.png?raw=true)             | ![red-outline](https://github.com/aslamhus/fileicon/blob/main/docs/images/red-outline.png?raw=true)             |
| purple              | ![purple](https://github.com/aslamhus/fileicon/blob/main/docs/images/purple.png?raw=true)       | ![purple-outline](https://github.com/aslamhus/fileicon/blob/main/docs/images/purple-outline.png?raw=true)       |
| blue                | ![blue](https://github.com/aslamhus/fileicon/blob/main/docs/images/blue.png?raw=true)           | ![blue-outline](https://github.com/aslamhus/fileicon/blob/main/docs/images/blue-outline.png?raw=true)           |
| lightBlue           | ![lightBlue](https://github.com/aslamhus/fileicon/blob/main/docs/images/lightBlue.png?raw=true) | ![lightBlue-outline](https://github.com/aslamhus/fileicon/blob/main/docs/images/lightBlue-outline.png?raw=true) |
| green               | ![green](https://github.com/aslamhus/fileicon/blob/main/docs/images/green.png?raw=true)         | ![green-outline](https://github.com/aslamhus/fileicon/blob/main/docs/images/green-outline.png?raw=true)         |
| yellow              | ![yellow](https://github.com/aslamhus/fileicon/blob/main/docs/images/yellow.png?raw=true)       | ![yellow-outline](https://github.com/aslamhus/fileicon/blob/main/docs/images/yellow-outline.png?raw=true)       |
| orange              | ![orange](https://github.com/aslamhus/fileicon/blob/main/docs/images/orange.png?raw=true)       | ![orange-outline](https://github.com/aslamhus/fileicon/blob/main/docs/images/orange-outline.png?raw=true)       |

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

![custom colors file icon](https://github.com/aslamhus/fileicon/blob/main/docs/images/ex1.png?raw=true)

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

See [test.html](https://github.com/aslamhus/fileicon/blob/main/test/test.html?raw=true) for more examples

## License

This project is licensed under the [MIT license](../LICENSE.md)
see the [LICENSE.md](https://github.com/aslamhus/fileicon/blob/main/LICENSE.md?raw=true) file for details
