# My Personal Website

## Project Overview

I built this website not just to create a portfolio of my projects but also to help others, especially non-programmers, in creating and building their own website. The project itself is built to be easily modifiable so even you don't know much about web development, you can still use this project as your template in building one.

#### Note when adapting this project

If you happen to encounter some not so non-programmer friendly configuration upon following the below instructions, kindly drop me a message using the **_Contact_** section of [my personal website](https://jcgonzaga01.github.io/) or send me an email at [my personal email](mailto:gonzaga.jc1993@gmail.com) or file an issue ticket in this repo.

## Project Structure

This project was built using below technologies:

1.  [ReactJS](https://reactjs.org/)
2.  [ReactHooks](https://reactjs.org/docs/hooks-intro.html)
3.  [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
4.  [Typescript](https://www.typescriptlang.org/)
5.  HTML/SCSS
6.  [Webpack](https://webpack.js.org/)

## Prerequisite

Make sure you have installed the ff. in your local machine:

1.  [GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2.  [NodeJS](https://nodejs.org/en/download/)
3.  [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

## How to set up?

You may wish to fork this repository or remove my remote origin and add your own. Go [here](https://help.github.com/articles/changing-a-remote-s-url/) for more information on how to change remotes.

1.  To download the repository and install dependencies, run the following commands:

```bash
git clone https://github.com/JCGonzaga01/jcgonzaga01.github.io.git [YOUR_PREFERRED_REPO_NAME]

cd [YOUR_PREFERRED_REPO_NAME]

yarn install
```

2. Once installed, run the following command to build the react application and serve it with hot module reloading:

```bash
yarn dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to view running project.

This completes the set up instructions. Please continue reading below to learn on how to modify this site to make it your own.

## Checklist

Most of the data displayed in this project was already centralized into one location `src/constants`.

1. Start by changing the Logo of this site, go to `src/assets` folder then update `header.png` and `header_hover.png` to your own logo.

2. All information of this website was already centralized to ease the modification. You can see the centralized information in `src/constants`. Kindly update each constant files in this folder to your own information except the `src/constants/_common` file.

3. To update the background image per section, kindly go to `src/assets/bg` and update all images in here. **NOTE** Make sure to use the same image file name to avoid issues.

4. To update the **Work Experience** image per company, kindly do the following:

   - Go to `src/assets/workExp` folder
   - Delete the existing images here and paste here all your company logo images.
   - Then, open `src/assets/index.ts` and find all `Work Experience` comment and update the import and the export images to your new company image name.
   - Finally, at the `src/constants/workExperience.ts`, make sure you use the correct exported image name as your icon in the **details > icon** property.

5. For the **Projects** and the **FunStuffs > Travel** images, you can either point it to url or you can do the same process with **Work Experience** in updating the company logo by using the `assets` folder and then export those images so you can import it back to `projects.ts` or `funStuffs.ts`.

6. For the **Contact** section, I currently use the firebase messaging in here. This is quite complicated for non-programmers. For now, kindly comment out or remove the declaration temporarily of the `<Contact / >` at `src/components/App/index/tsx` until I update this instruction to include on how to set-up firebase messaging. Or you can update this component now with your own messaging implementation.

## Build and Deploy

1. To build the project, run the below command.

```bash
yarn build
```

2. If you happen to fork this repository, you can auto deploy this project to your github repo by running the below command.

```bash
yarn deploy
```

This will create new git branch named `gh-pages`.
To know more on how to host repo project in Github, kindly read this [article](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for more information.

## Acknowledgements

- Special thanks to the following site in my providing my resources:

  - [FlatIcon](https://www.flaticon.com/) for my icons.
  - [Unsplash](https://unsplash.com/) for my background images.

- Template was based on [Landed](https://html5up.net/landed) by [@ajlkn](https://github.com/ajlkn)

## License

[MIT](https://github.com/JCGonzaga01/jcgonzaga01.github.io/blob/master/LICENSE)
