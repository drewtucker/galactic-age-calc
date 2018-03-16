## Planning

1. Configuration/dependencies:
   **Found in package.json**

  * "babel-core": "^6.26.0",
  *  "babel-loader": "^7.1.3",
  * "babel-preset-es2015": "^6.24.1",
  * "clean-webpack-plugin": "^0.1.19",
  * "css-loader": "^0.28.10",
  * "eslint": "^4.18.2",
  * "eslint-loader": "^2.0.0",
  * "html-webpack-plugin": "^3.0.6",
  * "jasmine": "^3.1.0",
  * "jasmine-core": "^2.99.0",
  * "karma": "^2.0.0",
  * "karma-chrome-launcher": "^2.2.0",
  * "karma-cli": "^1.0.1",
  * "karma-jasmine": "^1.1.1",
  * "karma-jasmine-html-reporter": "^0.2.2",
  * "karma-jquery": "^0.2.2",
  * "karma-webpack": "^2.0.13",
  * "style-loader": "^0.20.3",
  * "uglifyjs-webpack-plugin": "^1.2.2",
  * "webpack": "^4.1.1",
  * "webpack-cli": "^2.0.11",
  * "webpack-dev-server": "^3.1.1"

2. Specs:

  * Spec 1: Program will have a function to take the user's age in years and convert it into seconds. Input:"20 years", Output:"631152000 seconds"

  * Spec 2: Program will have functions to take the user's age and convert it to their age on a different planet in the solar system. Input: "20 years on Earth" Output: "~12.3 years on Venus"

  * Spec 3: Program will have a function to take two dates and return the difference, in seconds, between the two. Input: "3/16/2018, 3/16/2000" Output:"568036800 seconds"

  * Spec 4: Program will have a function to determine the user's expected remaining lifespan on each planet. Input: "23 years old" Output: "You have ____ years left to live on Venus!" If user has already passed the average life expectancy for that planet, they will recieve a different message output.
