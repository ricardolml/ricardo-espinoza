
export const CardsPortfolio = () => {
    return (
        <>
            <h1 className="text-center text-xl mb-3">Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="border-4 border-gray-600 rounded-lg shadow">
                    <a href="https://ricardolml.github.io/pokemon-game/" target="_blank" rel="noreferrer">
                        <img src="./img/pokemon.png" alt="weather-app" className="rounded-lg" />
                    </a>
                    <div className="mx-5 my-2">
                        <h1 className="font-bold text-lg mb-3 text-blue-400">Pokemon Game VueJS</h1>
                        <p className="font-sans text-justify text-sm">
                            Pokemon game tries to guess the pokemon that is hidden. <a href="https://github.com/ricardolml/pokemon-game" target="_blank" rel="noreferrer" className="text-blue-500" > More details in the repository. </a>
                            The technologies used: VueJS, Api Pokemon.
                        </p>
                        <div className="flex flex-row-reverse">
                            <a href="https://ricardolml.github.io/pokemon-game/" target="_blank" rel="noreferrer" className="px-2 py-1 bg-blue-500 rounded-lg w-20 text-center mt-5 text-xs">View</a>
                        </div>
                    </div>
                </div>
                <div className="border-4 border-gray-600 rounded-lg shadow">
                    <a href="https://ricardolml.github.io/profile-tailwind-react/" target="_blank" rel="noreferrer">
                        <img src="./img/tail.png" alt="weather-app" className="rounded-lg" />
                    </a>
                    <div className="mx-5 my-2">
                        <h1 className="font-bold text-lg mb-3 text-blue-400">Profile Tailwind</h1>
                        <p className="font-sans text-justify text-sm">
                            It's a small front project using tailwind css and react framework. An attempt was made to replicate the facebook profile as a practice.
                            <a href="https://github.com/ricardolml/profile-tailwind-react" target="_blank" rel="noreferrer" className="text-blue-500" > More details in the repository </a>
                            Technologies used: React and Tailwind css
                        </p>
                        <div className="flex flex-row-reverse">
                            <a href="https://ricardolml.github.io/profile-tailwind-react/" target="_blank" rel="noreferrer" className="px-2 py-1 bg-blue-500 rounded-lg w-20 text-center mt-5 text-xs">View</a>
                        </div>
                    </div>
                </div>
                <div className="border-4 border-gray-600 rounded-lg shadow">
                    <a href="https://ricardolml.github.io/maps-app-react/" target="_blank" rel="noreferrer">
                        <img src="./img/maps.png" alt="weather-app" className="rounded-lg" />
                    </a>
                    <div className="mx-5 my-2">
                        <h1 className="font-bold text-lg mb-3 text-blue-400">Mapas React</h1>
                        <p className="font-sans text-justify text-sm">
                            Maps-app-react is a web system where the user can search for places and draw the polyline of how to get there.
                            <a href="https://github.com/ricardolml/maps-app-react" target="_blank" rel="noreferrer" className="text-blue-500" >More details in the repository</a>
                            Technologies used: React, MapBox and Bootstrap.
                        </p>
                        <div className="flex flex-row-reverse">
                            <a href="https://ricardolml.github.io/maps-app-react/" target="_blank" rel="noreferrer" className="px-2 py-1 bg-blue-500 rounded-lg w-20 text-center mt-5 text-xs">View</a>
                        </div>
                    </div>
                </div>

                <div className="border-4 border-gray-600 rounded-lg shadow">
                    <a href="https://ricardolml.github.io/toronto-bike-share/" target="_blank" rel="noreferrer">
                        <img src="./img/toronto.png" alt="weather-app" className="rounded-lg" />
                    </a>
                    <div className="mx-5 my-2">
                        <h1 className="font-bold text-lg mb-3 text-blue-400">Toronto's Bike Share</h1>
                        <p className="font-sans text-justify text-sm">
                            It is a project where the user can check the availability of Toronto bikes.
                            <a href="https://github.com/ricardolml/toronto-bike-share" target="_blank" rel="noreferrer" className="text-blue-500" > More details in the repository</a>.
                            Technologies used: React, redux and tailwind css
                        </p>
                        <div className="flex flex-row-reverse">
                            <a href="https://ricardolml.github.io/toronto-bike-share/" target="_blank" rel="noreferrer" className="px-2 py-1 bg-blue-500 rounded-lg w-20 text-center mt-5 text-xs">View</a>
                        </div>
                    </div>
                </div>
                <div className="border-4 border-gray-600 rounded-lg shadow">
                    <a href="https://ricardolml.github.io/weather-app/" target="_blank" rel="noreferrer">
                        <img src="./img/porta1.png" alt="weather-app" className="rounded-lg" />
                    </a>
                    <div className="mx-5 my-2">
                        <h1 className="font-bold text-lg mb-3 text-blue-400">Weather-App</h1>
                        <p className="font-sans text-justify text-sm">
                            It is a small application where the user can see the weather status of different places.
                            <a href="https://github.com/ricardolml/weather-app" target="_blank" rel="noreferrer" className="text-blue-500" > More details in the repository. </a>
                            Technologies used: React and tailwind css
                        </p>
                        <div className="flex flex-row-reverse">
                            <a href="https://ricardolml.github.io/weather-app/" target="_blank" rel="noreferrer" className="px-2 py-1 bg-blue-500 rounded-lg w-20 text-center mt-5 text-xs">View</a>
                        </div>
                    </div>
                </div>
                <div className="border-4 border-gray-600 rounded-lg shadow">
                    <a href="https://sauce-demo-ce64c.web.app/#/auth/login" target="_blank" rel="noreferrer">
                        <img src="./img/sause.png" alt="weather-app" className="rounded-lg" />
                    </a>
                    <div className="mx-5 my-2">
                        <h1 className="font-bold text-lg mb-3 text-blue-400">Sauce Demo</h1>
                        <p className="font-sans text-justify text-sm">Demo system of a shopping cart.
                            <a href="https://github.com/ricardolml/sauce-demo" target="_blank" rel="noreferrer" className="text-blue-500" > More details in the repository. </a>
                            Technologies used: Angular, Firebase and Boostrap
                        </p>
                        <div className="flex flex-row-reverse ">
                            <a href="https://sauce-demo-ce64c.web.app/#/auth/login" target="_blank" rel="noreferrer" className="px-2 py-1 bg-blue-500 rounded-lg w-20 text-center mt-5 text-xs">View</a>
                        </div>
                    </div>
                </div>

                <div className="border-4 border-gray-600 rounded-lg shadow">
                    <a href="https://ricardolml.github.io/journal-app" target="_blank" rel="noreferrer">
                        <img src="./img/journal.png" alt="weather-app" className="rounded-lg" />
                    </a>
                    <div className="mx-5 my-2">
                        <h1 className="font-bold text-lg mb-3 text-blue-400">Journal App</h1>
                        <p className="font-sans text-justify text-sm">
                            It is a small project for managing notes, the user will be able to create, update and delete notes. <a href="https://github.com/ricardolml/journal-app" target="_blank" rel="noreferrer" className="text-blue-500" > More details in the repository. </a>
                            The technologies used: react, redux, scss, firestore and cloudinary.
                        </p>
                        <div className="flex flex-row-reverse">
                            <a href="https://ricardolml.github.io/journal-app" target="_blank" rel="noreferrer" className="px-2 py-1 bg-blue-500 rounded-lg w-20 text-center mt-5 text-xs">View</a>
                        </div>
                    </div>
                </div>

                <div className="border-4 border-gray-600 rounded-lg shadow">
                    <a href="https://ricardolml.github.io/vue-journal-vuex/" target="_blank" rel="noreferrer">
                        <img src="./img/jounal-vue.png" alt="jounal-app" className="rounded-lg" />
                    </a>
                    <div className="mx-5 my-2">
                        <h1 className="font-bold text-lg mb-3 text-blue-400">Journal-VueJS-Vuex App</h1>
                        <p className="font-sans text-justify text-sm">
                            It is a small project for managing notes, the user will be able to create, update and delete notes. <a href="https://github.com/ricardolml/vue-journal-vuex" target="_blank" rel="noreferrer" className="text-blue-500" > More details in the repository. </a>
                            The technologies used: VueJs, vuex, css, firebase Realtime Database and cloudinary.
                        </p>
                        <div className="flex flex-row-reverse">
                            <a href="https://ricardolml.github.io/vue-journal-vuex" target="_blank" rel="noreferrer" className="px-2 py-1 bg-blue-500 rounded-lg w-20 text-center mt-5 text-xs">View</a>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
};
