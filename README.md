# WIC2U — Basic Web Application Prototype

**Project:** WIC2U — Virginia WIC Access  
**Recognition:** Second Place, 2026 Virginia Datathon — Team Data Driven Divas  
**Developer:** Jyothi Sri

## About this project

This repository contains a basic web application prototype developed as part of my learning journey in frontend web development.

WIC2U is a team project focused on addressing geographic barriers to accessing Women, Infants, and Children (WIC) services in Virginia.

This simplified prototype explores how families could find clinic information and submit demonstration assistance requests.

## Features

- Interactive Virginia clinic map using Leaflet and OpenStreetMap
- ZIP code and health district filtering
- Sample clinic information cards
- WIC assistance request form
- Confirmation code generation
- Browser-local storage for demonstration requests
- Responsive page styling

## Technologies

HTML, CSS, JavaScript, JSON, Leaflet, and OpenStreetMap.

## Running it

1. Download or clone this repository.
2. Open a terminal in the project folder.
3. Run `python -m http.server 8000`.
4. Visit `http://localhost:8000` in your browser.

## Development journey

This repository documents my experience learning how HTML, CSS, JavaScript, and JSON work together to create basic interactive web application. Creating the basic prototype was very time consuming mostly because this was my first hands on experience with creating an app. A lot of thought went into visualizing how I want the platform to look like and what features I wanted to have. I first drew a rough framework on a paper and made a list of features I want, before I went ahead and started designing it.

After developing the basic prototype I used Replit to refine it, and automated several processes. I also used Replit for repetitive tasks such as adding the list of WIC clinics in the state and their addresses. This has been very helpful and saved a lot of time - One of the reasons for being able to complete the app in such short time.

I developed a separate volunteer interface and connected both the user and volunteer interfaces to a shared database. This integration enabled real-time data synchronization, allowing volunteers to view submitted requests through their interface on live. The real-time synchronization was the last step in the development and was the most critical feature that gave us the edge.

I plan to continue improving the prototype as I develop my programming skills.

### Live Application Links

- User Interface: [https://wic-2-u-virginia-wic-access--jyothisrilok.replit.app/]
- Volunteer Interface: [https://wic-2-u-virginia-wic-access--jyothisrilok.replit.app/volunteer-mobile-wic]

## Project Links

- Live Website: [View the WIC2U Basic Prototype](https://joelok86.github.io/WIC2U-Basic-prototype/)
- Source Code: [View the GitHub Repository](https://github.com/joelok86/WIC2U-Basic-prototype)

## Disclaimer

This is an educational demonstration, not an official Virginia WIC application.

Clinic listings are sample data and may be inaccurate or outdated. Requests are stored only in the user's browser and are not sent to WIC or an outreach coordinator. Do not enter real personal or health information.

The original WIC2U Datathon was a collaborative effort by Team Data Driven Divas, and included a lot of other aspects such as problem identification, understanding and communicating the burden of the problem and ideating on various solutions and strategies. This repository documents my work on the basic user-facing prototype and final user and volunteer we interfaces.
