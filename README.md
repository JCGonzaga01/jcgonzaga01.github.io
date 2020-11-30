# My Personal Website

## Project Overview

The project was built to be easily modifiable so even you don't know much about Javascript or ReactJS, you can still use this project as your template in building your own personal website.

#### Note when using this project as your template

If you happen to encounter some not so programmer friendly configuration upon following the below instructions, kindly send me an email at [my personal email](mailto:gonzaga.jc1993@gmail.com) or file an issue ticket in this repo.

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

## How to set up the project?

You may wish to fork this repository or remove my remote origin and add your own. Go [here](https://help.github.com/articles/changing-a-remote-s-url/) for more information on how to change remotes.

1.  To download the repository and install dependencies, run the following commands:

```bash
git clone https://github.com/JCGonzaga01/jcgonzaga01.github.io.git [YOUR_PREFERRED_REPO_NAME]

cd [YOUR_PREFERRED_REPO_NAME]

yarn install
```

2. Once installed, run the following command to build the application and serve it with hot module reloading:

```bash
yarn dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to view running project.

This completes the set up instructions. Please continue reading below to learn on how to modify this site to make it your own.

## Checklist

1. Start by changing the Logo of this site, go to `src/assets` folder then update `headerLogo.png` to your own logo.

2. All the informations and data displayed in this website were already centralized to ease the modification. You can see the centralized information at `src/constants` folder. Kindly update each constant files in this folder to your own information except the `src/constants/_common` file.

3. To update the background image per section, kindly go to `src/assets/bg` and update all images in here. **Note:** Make sure to use the same image file name to avoid issues.

4. To update the **Work Experience**, **Projects** && **FunStuffs** images, you can save all your own images to the assets folder and export it using the `src/assets/index.ts` file or assign the image URL directly to their respective constant file.

### Notes:

1. To make the **About Me** and **Skill** page button work, you can either point the url of this button page to your own aboutme/skill page implementation OR you can check and fork my [info](https://github.com/JCGonzaga01/info) page implementation for this.

## Build and Deploy

1. To build the project, just run the below command.

```bash
yarn build
```

2. If you fork this repository in your own github account and wants to deploy it in github hosting, you can just run the below command to auto deploy and host your project.

```bash
yarn deploy
```

Running the above command will create new git branch named `gh-pages`.
To know more on how to host repo project in Github properly, kindly read this [article](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for more information.

## Acknowledgements

1. Special thanks to the following sites in providing my resources:

- [FlatIcon](https://www.flaticon.com/) for my icons.
- [Unsplash](https://unsplash.com/) for my background images.

2. Template was based on [Landed](https://html5up.net/landed) by [@ajlkn](https://github.com/ajlkn)

## Reminder

- Please don't forget to send love and support by giving star to this project.
- If you encounter some issues or would like to add some enhancement, never hesitate to file an issue ticket and send PR.

## License

[MIT](https://github.com/JCGonzaga01/jcgonzaga01.github.io/blob/master/LICENSE)
