# CSS Beautify #

CSS Beautify is a JavaScript implementation of reindenter and reformatter for styles written in CSS.

Given the following style:

    menu{color:red} navigation{background-color:#333}


CSS Beautify will produce:

    menu {
        color: red
    }
    
    navigation {
        background-color: #333
    }

Try it online at [http://senchalabs.github.com/cssbeautify](http://senchalabs.github.com/cssbeautify).

## Contributing ##

Before we can accept any contributions, you need to sign [Contributor License Agreement](http://en.wikipedia.org/wiki/Contributor_License_Agreement). We are preparing the CLA and it should be available soon.

For the actual contribution, please use [Github pull request](http://help.github.com/pull-requests/) workflow.

Please do not create a pull request for multiple unrelated commits. It is strongly recommended to create a topic branch and make the commits as atomic as possible for the merge. This makes it easy to review all the changes.

Make sure that your code passes [JSLint](http://jslint.com) checks.

Make sure your patch does break existing tests (open <code>test.htm</code> in a web browser).

If you add a new feature, create a new test associated with that. Feature or enhancement pull request without a corresponding test will **not** be merged.

## License ##

Copyright (C) 2011 Sencha Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
