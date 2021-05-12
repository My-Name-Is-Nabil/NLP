# NLP Project

## Webpack Configuration

There are two webpack configuration files for webpack, one for development and one for production. In development, webpack is configured to display a source map and files aren't minified and css isn't extracted, while in production css files are minified and extracted, in production the site also offers a service worker that caches the site and allows offline navigation.

## API 

The API allows the user to do three NLP operations on the article in question, sentiment analaysis, topic extraction and summarization, the API key is stored in .env file for safety purposes.

## View

The view index.html is a simple page that has an input field and a selection menu to select the processor and a submit button, the submit will then display the result in the result section at the end of the page.

## SASS

The styling of the site is written in SASS and it's seperated in multiple files for ease of editing and readbility.

## Testing

In this project we use JEST framework to test javascript files in the client side, these test allow us to see if our files produce predictable behaviour.



