# www.devstone.io

### My personal portfolio website
My very own website that truly reflects who I am as a developer! When I was planning the design of my site, I kept thinking to myself "Should I use a static website generator? What framework is the best? Should I use a CSS framework?", and it seemed there were so many choices to pick from. Instead of mulling over the endless combiations I could use, I decided with the foundations of the web: HTML, CSS and Vanilla Javascript.<br/>

## Features
:small_blue_diamond: Fully responsive design for mobile, small, medium and large screens. <br/>
:small_blue_diamond: seemless animations using the Animate On Scroll (AOS) library. <br/>
:small_blue_diamond: Lightning fast loading time due to Amazon Web Services hosting. <br/>
:small_blue_diamond: FormSubmit for a serverless form, so users can send me an email.


## Built with

### Language Stack
:small_blue_diamond: HTML 5 <br/>
:small_blue_diamond: CSS 3 <br/>
:small_blue_diamond: Vanilla Javascript <br/>

### Libraries
:small_blue_diamond: Animate On Scroll (AOS)

### Deployment
:small_blue_diamond: AWS S3 Buckets <br/>
:small_blue_diamond: AWS CloudFront <br/>
:small_blue_diamond: AWS Route 53 <br/>

## Challenges
### I faced two main challenges when developing my website.
1. Responsive Design
2. Deployment on AWS

#### Responsive Design
I've used libraries such as Tailwind CSS and Bootstrap for responsive design before, and they take care of alot behind the scenes. I wanted to challenge myself and get more comfortable with plain CSS, and make my site responsive with the use of Media Queries only (minus the hamburger menu for mobile devices...that was Javascript). The sizing of containers, fonts, images, and videos are all done with media queries.

#### Deployment on AWS
I wanted to deploy my website to a provider that is extremely fast, reliable and safe. Why not use the largest one of all - Amazon Web Services. AWS has been known to be confusing/difficult to navigate, but I survived! Here are the steps I took: <br/>

1. Create two buckets in S3: The first bucket was were all my web contents were placed and set for the URL: www.devstone.io. The second bucket is just a redirect bucket for anyone who types in "devstone.io", it directs them to the "www" domain.
2. Connect my domain to my S3 bucket: I bought my domain off of GoDaddy.com. Using AWS Route 53 I was able to map my domain that is managed by GoDaddy to my S3 static site.
3. Set up AWS CloundFront distribution: Using S3 is great for static sites but there is a drawback - it does not offer HTTPS protocol. To achieve this, I created an AWS CloudFront distribution to connect my main S3 bucket to. This also provides me with the CDN which caches my site for distribution, which is incredibly fast.
4. Requested SSL in AWS Certificate Manager: Lastly, I requested my SSL certificate so I can apply the HTTPS protocol to my website.

## Reflection
