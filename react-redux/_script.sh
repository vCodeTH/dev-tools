#!/bin/bash


printf "==================================\n"
printf " vCode React+Redux Generator\n"
printf "==================================\n\n"
read -p "Please input your path project :" dir
installer=$PWD
cd $dir


printf "==================================\n"
printf " Install create-react-app \n"
printf "==================================\n\n"
npm i -g yarn create-react-app
create-react-app .


printf "==================================\n"
printf " Redux dependencies \n"
printf "==================================\n\n"
yarn add redux react-redux redux-form redux-thunk recompose
yarn add lodash.merge lodash.throttle 
yarn add react-router-dom connected-react-router
yarn add bootstrap@4.0.0-alpha.6 reactstrap react-addons-css-transition-group react-addons-transition-group


printf "==================================\n"
printf " Dev dependencies \n"
printf "==================================\n\n"
yarn add eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --dev
yarn add @kadira/react-storybook-addon-info @kadira/storybook @kadira/storybook-addons --dev
yarn add enzyme react-addons-test-utils --dev
yarn add gh-pages --dev


printf "==================================\n"
printf " Install template \n"
printf "==================================\n\n"

IFS=''
DATA=$(<"$installer"/_merge.txt)
mv package.json package.json.bak
head --lines=-7 package.json.bak > package.json
echo $DATA >> package.json
rm -rf src package.json.bak README.md
cp -r "$installer"/source/. .


printf "==================================\n"
printf " Done!! Enjoy to coding :D \n"
printf "==================================\n\n"
sleep 5000000