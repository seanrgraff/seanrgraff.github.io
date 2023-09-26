# The Graff Brothers Website

Main idea behind this repo currently is that it will be in a shared, private Github repo.  The build/deploy process is currently done taking advantage of free accounts and [Gatsby](http://www.gatsbyjs.com).  GatsbyJS has free cloud accounts that link to a Github repo and automatically detect changes, re-build, and re-deploy to their hardware.  I am also configuring [The Graff Brothers DNS name **thegraffbrothers.com**](http://www.thegraffbrothers.com) to point to the static IP address that GatsbyJS assigns us as part of this automated build/deploy setup.

## The Code

Code was written using NodeJS, ReactJS and GatsbyJS.  GatsbyJS is really the driver, and the code is just a modification of their tutorial/walkthrough process.  The website is very simple, with a [Mailchimp](http://mailchimp.com) signup form, and a background image.

I would like to add the following:
- Links to recorded media (Soundcloud for audio, [Odysee](https://odysee.com/@TheGraffBrothers:b) for videos)
- Other links for generating revenue/tips.  "Buy us a coffee" link for a donation of $5.  Link for MetaMask donation?
- Schedule of our planned twitch stream events (or similar) for a weekly/bi-weekly/monthly virtual event?
- Display the events on our TGB Google calendar.
- ["Buy me a coffee"](https://www.buymeacoffee.com/graffbrothers)
- ["Merch"](https://thegraffbrothers.threadless.com/)

GatsbyJS Cloud infrastructure also has the ability to link to gitlab, so if we prefer to use that and track changes, etc - we can migrate to that platform.
