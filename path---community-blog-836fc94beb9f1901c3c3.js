webpackJsonp([59],{"./node_modules/json-loader/index.js!./.cache/json/community-blog.json":function(e,t){e.exports={data:{allFile:{edges:[{node:{relativePath:"community/articles-and-videos.md",childMarkdownRemark:{frontmatter:{title:"Articles & Videos",order:10}}}},{node:{relativePath:"community/blog.md",childMarkdownRemark:{frontmatter:{title:"Blog",order:0}}}},{node:{relativePath:"community/companies.md",childMarkdownRemark:{frontmatter:{title:"Companies",order:60}}}},{node:{relativePath:"community/events.md",childMarkdownRemark:{frontmatter:{title:"Events",order:30}}}},{node:{relativePath:"community/faq.md",childMarkdownRemark:{frontmatter:{title:"Frequently Asked Questions",order:40}}}},{node:{relativePath:"community/index.md",childMarkdownRemark:{frontmatter:{title:"Community",order:0}}}},{node:{relativePath:"community/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"community/roadmap.md",childMarkdownRemark:{frontmatter:{title:"Roadmap & Contribution",order:50}}}}]},file:{relativePath:"community/blog.md",childMarkdownRemark:{html:'<h3 id="messengercom-now-50-converted-to-reason"><a href="#messengercom-now-50-converted-to-reason" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Messenger.com Now 50% Converted to Reason</h3>\n<p><em>September 8, 2017</em></p>\n<p>Boom!</p>\n<p>Messenger.com is the web version of Facebook Messenger; we also share code with facebook.com\'s inbox view and chat tabs. For over a year, the Reason team has been working directly on Messenger in order to integrate Reason + BuckleScript into the codebases. As of a while ago, we\'ve reached 50% Reason code coverage!</p>\n<h4 id="some-statistics"><a href="#some-statistics" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Some Statistics</h4>\n<ul>\n<li>Full rebuild of the Reason part of the codebase is ~2s (a few hundreds of files), incremental build (the norm) is <strong>&#x3C;100ms</strong> on average. The BuckleScript author estimates that the build system should scale to a few hundred thousands files in the current condition.</li>\n<li>Messenger used to receive bugs reports on a daily basis; since the introduction of Reason, there have been a total of <strong>10 bugs</strong> (that\'s during the whole year, not per week)!</li>\n<li>Most of the messenger core team\'s new features are now developed in Reason.</li>\n<li>A dozen of massive refactor to iterate on ReasonReact, from us and others. Refactoring speed went from days to hours to dozens of minutes. I don\'t think we\'ve caused more than a few bugs during the process (counted toward the total number of bugs).</li>\n<li>Everyone writing Reason got promoted for quality engineering. Just kidding. But definitely high, long-term impact.</li>\n</ul>\n<h4 id="which-teams-next"><a href="#which-teams-next" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Which Team\'s Next?</h4>\n<p>We believe in iterating on/alongside product teams in order to create the best infra. The product teams\' and open source folks\' feedback has changed our strategy a few times, for the better. As of today, Reason and BuckleScript are also deployed on a WhatsApp internal tool, Instagram Web (small scale), plus some critical Ads internal tools. We\'ll be working closely with these teams over the next year.</p>\n<p>We\'ve successfully onboarded regular JavaScript folks to Reason; in the most extreme case, an intern with no JS knowledge was able to ship ReasonReact code in production (and made 0 bug while doing so). Give your own team a try! =)</p>\n<p>A big thanks to all these teams\' members, to Hongbo (BuckleScript author) and to the OCaml community (really, 50% Reason means 50% OCaml. We\'re nothing without you); and of course, to all of you folks in the community for being with us all this time. The best is yet to come.</p>\n<p>See you soon!</p>\n<h3 id="way-way-waaaay-nicer-error-messages"><a href="#way-way-waaaay-nicer-error-messages" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Way, Way, Waaaay Nicer Error Messages!</h3>\n<p><em>August 25, 2017</em></p>\n<p>A picture\'s worth a thousand words.</p>\n<p>Before:</p>\n<div style="width:744px">\n  <img alt="before" src="https://user-images.githubusercontent.com/1909539/29709302-ab0c6aee-8940-11e7-953f-60a867d242cb.png" />\n</div>\nAfter:\n<div style="width:742px">\n  <img alt="before" src="https://user-images.githubusercontent.com/1909539/29709301-ab04eac6-8940-11e7-8d2b-c65f808b6be8.png" />\n</div>\n<p>Sometimes when I\'m busy working, some random colleague/Discord member would ping me and tell me "Yo Cheng Lou why are Reason\'s errors so bad? Why can\'t you be more like <a href="http://elm-lang.org">Elm</a> Cheng Lou? Why? Look at how great Elm\'s errors are Cheng Lou, look."</p>\n<p>In reality I\'m pretty darn ashamed of our error messages; here we are, a type system with two decades of solid research and implementation, but sometimes presented to the end users as if it\'s something that\'d get in their way.</p>\n<p>No more! We\'ve heard you loud and clear, and delivered you much improved error messages! A few things we did:</p>\n<ul>\n<li>Display the error-ing line(s), right inside the terminal.</li>\n<li>Better colors, for quicker visual search.</li>\n<li>Improved messages in many cases.</li>\n<li>Errors in Reason syntax for Reason files.</li>\n<li>A bit of breathing room between lines.</li>\n</ul>\n<p>The last point is a tradeoff; errors end up taking more space. Seeing that you\'d usually focus on a single error rather than trying to get an overview of all errors, we\'ve deemed this tradeoff worthwhile, especially in the context of a big amount of build output. Considering the new warning format:</p>\n<div style="width:745px">\n  <img alt="warning-after" src="https://user-images.githubusercontent.com/1909539/29711739-431be094-894b-11e7-87a6-bc1d6aeea043.png" />\n</div>\nHere\'s the same warning, old version, buried among other outputs:\n<div style="width:745px">\n  <img alt="warning-before" src="https://user-images.githubusercontent.com/1909539/29711789-810739f8-894b-11e7-8451-a919b3f119c6.png" />\n</div>\n<p>At Messenger, we\'ve seen people ship warnings to production not because they didn\'t want to fix them, but because they\'ve <strong>missed them</strong>! It\'s not rocket science. Leave some negative space here and there. Color things appropriately. Voilà!</p>\n<p><strong>The new errors can be turned on by adding <code>"bsc-flags": ["-bs-super-errors"]</code> to your bsconfig.json</strong>, <a href="https://github.com/reasonml-community/reason-react-example/blob/6dc15bf5fbeeb184c99acb063f7644a0d14b12f4/bsconfig.json#L3">like so</a>. They\'re also available for <a href="https://github.com/bsansouci/bsb-native">bsb-native</a>. True to our stack\'s spirit, they\'re fast, simple to configure, and solid.</p>\n<p><strong>One more thing</strong>: we\'re vertically integrated common pitfalls of <a href="//reasonml.github.io/reason-react/">ReasonReact</a> into these messages too, when applicable.</p>\n<div style="width:747px">\n  <img alt="reason-react" src="https://user-images.githubusercontent.com/1909539/29712284-f1013bb2-894d-11e7-9596-1cca54d5c331.png" />\n</div>\n<p>This is just the first of many iterations to come! Got a message you\'d like to see explained better? File an issue <a href="https://github.com/reasonml-community/error-message-improvement/issues">here</a>!</p>\n<p>Enjoy =)</p>\n<h3 id="much-better-playground"><a href="#much-better-playground" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Much Better Playground</h3>\n<p><em>August 18, 2017</em></p>\n<p>Based on popular feedback, we\'ve now improved our online <a href="/try">Try</a> section. Highlights:</p>\n<ul>\n<li>Bidirectional conversion. Write Reason, get OCaml translation, vice-versa.</li>\n<li>Live evaluation, with console feedback in the lower-right section.</li>\n<li>Most of the <a href="/api/index.html">standard library</a> is now loaded. Since we\'re evaluating on the web, This includes BuckleScript\'s <a href="https://bucklescript.github.io/bucklescript/api/">extra stdlib APIs</a>.</li>\n<li>Sharable code snippet! Just copy the URL.</li>\n<li>Some performance improvements.</li>\n</ul>\n<p>Have fun!</p>\n<h3 id="new-website"><a href="#new-website" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New website!</h3>\n<p><em>July 14, 2017</em></p>\n<p>Notice anything different? =)</p>\n<p>The new documentation website is built by our community member <a href="https://jaredforsyth.com">Jared</a> (make sure to check his Reason blog posts too!). The new site keeps most of the same content from the old one, while providing a better structure to navigate through them. You\'ll notice "Suggest an edit" links all over the place. Take a look around!</p>\n<p>(Built with <a href="https://www.gatsbyjs.org">Gatsby</a>)</p>\n<h3 id="new-reasonreact-version-released"><a href="#new-reasonreact-version-released" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New ReasonReact version released</h3>\n<p><em>June 12, 2017</em></p>\n<p>Very exciting release! Short version: ReasonReact now has its own documentation site <a href="//reasonml.github.io/reason-react/">here</a>. Accompanying this is the new <a href="https://www.npmjs.com/package/bs-platform">BuckleScript</a> release. Both are non-breaking.</p>\n<p>Enjoy!</p>\n<h3 id="spring-cleaning-first-blog-post"><a href="#spring-cleaning-first-blog-post" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Spring Cleaning (First Blog Post!)</h3>\n<p><em>May 18, 2017</em></p>\n<p>Now that the community is taking off, keeping folks up-to-date through <a href="https://discord.gg/reasonml">Discord</a> and other existing channels became less ideal. We\'re starting a blog post section for this reason. In the spirit of the community, these posts will stay short and concise.</p>\n<p>We\'ve moved unused first-party projects from <a href="https://github.com/reasonml/">GitHub/reasonml</a> to <a href="https://github.com/reasonml-old">GitHub/reasonml-old</a>. Old URLs are redirected, so no breakage here.</p>\n<p>We\'ve cleaned up the Reason codebase. Editor integrations moved out to their dedicated repos. Updated instructions are still <a href="/guide/editor-tools/editors-plugins">here</a>. Other Reason repo cleanups are still ongoing.</p>\n<p>Some discord rooms got merged together. Fewer rooms, more focused discussions.</p>\n<p>As you can see: this documentation site got a few rearrangements too. In general, if you\'d like to contribute to docs, please ping us on Discord!</p>',frontmatter:{title:"Blog"}}}},pathContext:{section:"community",sectionTitle:"Community",relativePath:"community/blog.md",relatedFiles:"/^community\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---community-blog-836fc94beb9f1901c3c3.js.map