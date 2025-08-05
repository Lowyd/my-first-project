# IT212 – LABORATORY ACTIVITY: Styling with CSS
Title: Color and Style Your Page
Duration: 1 Hour
Topic Coverage: Version control, HTML Basics, CSS Styling, Class and ID Selectors, Button Types


# Objectives:
By the end of this activity, the student will be able to:
•	Structure a web page using HTML.
•	Use internal CSS to apply styling via class and ID selectors.
•	Apply color, font, spacing, and size to elements.
•	Create and style multiple button types using CSS.
•	Practice Git and GitHub for version control

# Instructions:

1. Project Setup
•	Open your GitHub-linked project folder in Visual Studio Code.
•	Create a new HTML file named: prelim.html.

2. Basic HTML Structure
•	Add the required HTML structure (DOCTYPE, html, head, body, etc.).
•	Set the <title> to: Prelim Examination.

3. Main Content Layout
•	Inside the <body>, do the following:
    •	Add a <main> element with class container.
        •	Inside <main>, add a div with a class row and add the following:
            1. div with a class name col-md-12. Inside the div col-md-12 add another div with a class name card.
                    1. Inside the div class card add the following: (div.card-title, h3, p)
                        - A div with class card-title and add (h1)
                        - Inside this card-title add an <h1> titled Prelim Examination, and an ID of main-title.
                    2. An <h3> with your Full Name (e.g., JOHN D. JOE) as the text content.
                    3. A <p> with this text: "Button tag creates a clickable that users can interact with them."
                    4. Four <button> elements with the following classes and text:
                        - class btn-success → text Submit
                        - class btn-danger → text Delete
                        - class btn-warning → text Caution
                        - class btn-cancel → text Cancel
4. Link CSS and Add Internal Styles 
    Inside the <head>:
    •	Link layout.css using <link> tags.
    •	Add a <style> tag containing internal CSS to style the buttons:
    Each button must have:
    1)	Specific background color:
        - btn-success: #4caf50
        - btn-danger: #f44336
        - btn-warning: #ffa726
        - btn-cancel: #999999
    2)	White or black text (depending on contrast)
    3)	Font size: 18px
    4)	Padding: 10px
    5)	Rounded corners (your design choice)
    6)	Width: 200px, Height: 50px
    7)	Margin: 10px
    8)	Border: none
    9)	Box shadow for interactivity
    5. Commit and Push to GitHub

5. Use Git commands in terminal to:
    o	git add .
    o	git commit -m "Add Prelim Examination layout"
    o	git push


# Rubric

1. HTML Structure - 5points
2. Layout & Tag Usage - 5points
3. Content Elements - 5points
4. Internal CSS Button Styling - 5points
5. Git & GitHub Submission - 5points
6. Extra points to those first 3 person who commit and push their changes completely

