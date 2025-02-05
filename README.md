# Fork of Joshua Comeau's `new-component` CLI utility

with specific templates used to create components for the [OpenLens](https://github.com/lensapp/lens) app

To use `new-component` utility for your specific project, please open original Joshua repository https://github.com/joshwcomeau/new-component.

**Do not use it anywhere except OpenLens** because it contains Lens-specific comments at the top of the files.

---

<p align="center">
  <img src="https://github.com/joshwcomeau/new-component/blob/master/docs/logo@2x.png?raw=true" width="285" height="285" alt="new-component logo">
  <br>
  <a href="https://www.npmjs.org/package/new-component"><img src="https://img.shields.io/npm/v/new-component.svg?style=flat" alt="npm"></a>
</p>

### Simple, customizable utility for adding new React components to your project.

<img src="https://github.com/joshwcomeau/new-component/blob/master/docs/divider@2x.png?raw=true" width="888" height="100" role="presentation">

Anyone else sick of writing the same component boilerplate, over and over?

This project is a globally-installable CLI for adding new React components. It's dead simple to use, and requires no configuration, although it's easy to customize it to fit your project's coding style.

<br />

## Features

- Simple CLI interface for adding Component, PureComponent, or Stateless Functional components written in TypeScript or JavaScript.
- Uses [Prettier](https://github.com/prettier/prettier) to stylistically match the existing project.
- Offers global config, which can be overridden on a project-by-project basis.
- Colourful terminal output!

<br />

## Quickstart

Install via NPM:

```bash
# Using Yarn:
$ yarn global add new-component

# or, using NPM
$ npm i -g new-component
```

`cd` into your project's directory, and try creating a new component:

<p align="center">
  <img src="https://github.com/joshwcomeau/new-component/blob/master/docs/demo.gif?raw=true" width="888" height="369" alt="demo of CLI functionality">
</p>

Your project will now have a new directory at `src/components/Button`. This directory has two files:

```jsx
// `Button/index.ts`
export { default } from './Button';
```

```jsx
// `Button/Button.tsx`
import { Component } from 'react';

class Button extends Component {
  render() {
    return <div>Test content</div>;
  }
}

export default Button;
```

> This structure might appear odd to you, with an `index.ts` that points to a named file. I've found this to be an optimal way to set up components; the `index.ts` allows you to `import` from the directory (eg. `import Button from 'components/Button'`), while having `Button.tsx` means that you're never lost in a sea of `index.ts` files in your editor.
>
> This structure is not currently configurable, but I'm happy to consider implementing alternatives!

<br />

## Configuration

Configuration can be done through 3 different ways:

- Creating a global `.new-component-config.json` in your home directory (`~/.new-component-config.json`).
- Creating a local `.new-component-config.json` in your project's root directory.
- Command-line arguments.

The resulting values are merged, with command-line values overwriting local values, and local values overwriting global ones.

<br />

## API Reference

### Type

Control the type of component created:

- `functional` for a stateless functional component (default).
- `class` for a traditional Component class,
- `pure-class` for a PureComponent class,

Legacy `createClass` components are not supported.

**Usage:**

Command line: `--type <value>` or `-t <value>`

JSON config: `{ "type": <value> }`
<br />

### Directory

Controls the desired directory for the created component. Defaults to `components`

**Usage:**

Command line: `--dir <value>` or `-d <value>`

JSON config: `{ "dir": <value> }`
<br />

### Language

Controls the language for the created components. Can be either `ts` (default) or `js`.

**Usage:**

Command line: `--language <value>` or `-l <value>`

JSON config: `{ "language": <value> }`
<br />

### File Extension

Controls the file extension for the created components. Can be either `js` (default) or `jsx`. 

> As you see, `tsx` is not predicted - everything because if you choose TypeScript as the [language](#language), file extension always remain `tsx` and you don't have to tweak this option in any way. 

**Usage:**

Command line: `--extension <value>` or `-x <value>`

JSON config: `{ "extension": <value> }`
<br />

### Prettier Config

Delegate settings to Prettier, so that your new component is formatted as you'd like. Defaults to Prettier defaults.

For a full list of options, see the [Prettier docs](https://github.com/prettier/prettier#options).

**Usage:**

Command line: N/A (Prettier config is only controllable through JSON)

JSON config: `{ "prettierConfig": { "key": "value" } }`
<br />

**Example:**

```js
{
  "prettierConfig": {
    "singleQuote": true,
    "semi": false,
  }
}
```

(Ideally, the plugin would consume your project's prettier settings automatically! But I haven't built this yet. PRs welcome!)

<br />

## Platform Support

This has only been tested in macOS. I think it'd work fine in linux, but I haven't tested it. Windows is a big question mark (would welcome contribution here!).

<br />

## Development

To get started with development:

- Check out this git repo locally, you will need to ensure you have Yarn installed globally.
- In the folder run `yarn install`
- Check that command runs `node ../new-component/src/index.js --help`
- Alternatively you can set up a symlink override by running `npm link` then `new-component --help`. Note: this will override any globally installed version of this package.
