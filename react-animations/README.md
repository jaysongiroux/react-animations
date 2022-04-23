# react-animations
custom react toast animations with different variants/animations
Minimalistic elements meant to be stylized and placed within your project


<br />

## Popup
position is meant to pop up not be inline with other components or containers

![popup animations](https://github.com/jaysongiroux/react-animations/blob/master/npm_assets/popup.gif?raw=true)

### Usage
```
<Popup show={show} animated={true} onClose={closed}/>
```

### Props
|prop| type | comment|
|----|------|--------|
|show|bool| true = popup opens|
|animated|bool|If popup is animated|
|onClose|callback|called when popup is closed|
|variant|string | success(default), warning, danger, trash|

<br />

## InLinePopup
position is meant to fit within buttons, cards, and other containers

![popup animations](https://github.com/jaysongiroux/react-animations/blob/master/npm_assets/inlinepopup.gif?raw=true)

### Usage
```
<InLinePopup show={show} animated={true} onClose={closed}/>
```
### Props
|prop| type | comment|
|----|------|--------|
|show|bool| true = popup opens|
|animated|bool|If popup is animated|
|onClose|callback|called when popup is closed|
|variant|string | success(default), warning, danger, trash|

<br />

## Modal
Position is absolute and meant to be displayed over everything
![modal animations](https://github.com/jaysongiroux/react-animations/blob/master/npm_assets/modal.gif?raw=true)

### Usage
```
<Modal show={showModal} onClose={closeModal}  variant="success" backdrop={false} message="saved!"/>
```
### Props
|prop| type | comment|
|----|------|--------|
|show|bool| true = popup opens|
|onClose|callback|called when popup is closed|
|message|string|message displayed below the icon|
|backdrop|bool|Makes background dark temporarily|
|variant|string | success(default), warning, danger, trash|

<br />
<br />


### importing
```
import { Modal } from 'react-animation-library/dist/'
```

# Environment Setup
## Demo
```
git clone https://github.com/jaysongiroux/react-animations.git
cd react-animations/react-animations
npm install
npm start
```
## Building
```
git clone https://github.com/jaysongiroux/react-animations.git
cd react-animations/react-animations
npm run build or yarn build
```
## deploy
```
yarn build or npm run build
npm deploy
```