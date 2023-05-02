
# CL 1.5
CL 1.5 as a name implies is a cover letter portfolio website made in react.js.

## Demo
https://kanhaiya-five.vercel.app/


## Screenshots

![App Screenshot](https://github.com/kanhaiya8608/CL1.5/blob/main/Screenshot/Kanhaiya%20Verma.png?raw=true)


## Tech Stack
React.JS, TailwindCSS
, HTML5, CSS3

## Run Locally

Clone the project

```bash
  git clone https://github.com/kanhaiya8608/CL1.5
```

Go to the project directory

```bash
  cd CL1.5
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Usage
##### Add your Custom text to header in Header.jsx at src/data/Header.jsx.. Use radialtextgradient to customize text animations.

Guide: https://www.npmjs.com/package/react-text-gradients-and-animations

````
<RadialTextGradient
shape={"circle"}
position={"top"}
colors={["#fff", "#ecc94b"]}
animate={true}
animateDirection={"horizontal"}
animateDuration={5}>
Uttar Pradesh, India.</RadialTextGradient>
````

##### Change data in the projects and social media component by customizing the datafile.js at src/data/datafile.js.

##### Here the category plays acrucial role for what is parsed according to the category. You can create your own data and categories and more components acc to your need

```
export const datafile = [
    {
        name: "KMDB (Kanhaiya's Movie Database)",
        link: "https://kmdb-cx58.onrender.com/",
        category: 'projects',
        imgLnk: './assets/images/db.png',
        description: "Discover your favorite movies with ease on our IMDb clone website, powered by Node.js, Express.js, and MongoDB. ",
    },
    {
        name: "Phone",
        link: "tel:+919675194059",
        category: 'social',
        imgLnk: "./assets/images/phone.png",
        description: "9675194059, 8279831348",
    },
];
```

In the projects.jsx and bio.jsx, you may come across similar code:

```
{datafile.filter((data) => data.category === "projects").map((data) => {
return (      
    <img src={data.imgLnk} alt='' width='56px'  className='rounded-full' />
    <div className='ml-4'>
    <h3 className='text-lg font-medium'>{data.name}</h3>
    <p className='text_gr'>{data.description}</p>
  )
}
```
Here, filter used to parse data according to category from datafile.js. 

Change favicon by changing the code at index.html.
```
<link rel="icon" type="image/svg+xml" href="./public/assets/images/obito.ico" />
```
## License

[CC](https://github.com/kanhaiya8608/CL1.5/blob/main/LICENSE)


## References

Here are some resources used in this project.

[NPMJS](https://www.npmjs.com/)

[Icons8](https://www.npmjs.com/)

[DavidhU](https://www.davidhu.io/react-spinners/)

[Tailwind]([NPMJS](https://www.npmjs.com/))
