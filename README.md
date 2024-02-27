# tech-trend-news

# SheldonNews A HackerNews client that shows a list of trending posts from YCombinator. 

## Screens ### 
Home Page Displays a list of trending posts from HackerNews. Add dark mode functionality.
- **Behavior:** Fetches and updates the posts from the HackerNews API. On tap, triggers the `PostList` to refresh the posts.
 - **Layout:** Contains a 'Header', a 'Teaser', a 'SearchField', a 'PostList', an 'EmailOptin', a 'Footer' and 'Cookie Consent'. Content max-width: 940 px. Make backgrounds full width. Add appropriate white space between sections to improve readability.

#Header#
Layout: 
	- Header should have two rows: main-header, multicolored line, sub-header with teaser-text.
	- Main-header: Dark background color in both white- and darkmode. Align blog title to the left, dark mode and refresh icons to the right. Icon colors: have to be white in both dark and white mode, have no button background color and slightly darker icon color on click and on hover.
	- Multicolored line: A border with 6 vibrant colors gradient as the background.
	- Sub-header: Add teaser text: "Discover the future of technology today and be part of the conversation that shapes our tomorrow." background-color: Same as main-header.

#Teaser
Add teaser text: "Stay ahead of the curve with the latesttech buzz!⚡". Center text.

#SearchField
	- Layout: Make searchfield color background in white mode light grey. Field max width: 60%. Position the search field in the center, so center the search field in the layout.

#Post List
	- Layout: 3 columns card layout. Make layout look modern (cards). 

#PostItem
	- Layout: First row image, second row title, third row publish date, category, likes.
	- Likes: Display scores as likes with a heart icon. Allow users to like a post by clicking on the heart. Increase or decrease like count on click.

 #EmailOptin
Create a title and subtext. Add stars emoji at the end of the title. Add email field and sign up button in the third row.  Email optin background: #005ce6. Button background and text color: white. Make button background full width. Layout: Position email optin row below the first three blog posts. 

#Footer
Add two rows: 
First row: "Created by 🤖 and proud of it!"
"© [this year] Spectactulr News. All rights reserved." Layout: Make background color the same as header. Show footer always at the bottom.

#CookieConsent
Make website GDPR complaint. Add cookie consent. Make consent button background color same as email optin background, text-color should be white so it's readable. Make button background slightly darker on hover. 

#Check Layout
Check dark colored sections: Text and icons have to be white to allow good readiblity, both in light and dark mode. The same goes for the blue background sections. For blue buttons, text color must be white.

#Add Behavoir
	- CookieConsent: Hide consent bar when user clicks submit button.
	- EmailOptin: Show success message when user submits email.
	- PostItem: Use Unsplash webservice to get random images from categories "space" or "technology". Learn how to integrate images from Unsplash and integrate this.
SearchField: Implement frontend logic to search for blog posts. Users have to be able to search blog posts.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/tech-trend-news.git
cd tech-trend-news
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
