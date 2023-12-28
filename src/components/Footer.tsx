export function Footer() {
    return (
        <>
            <footer>
                <p><a href='https://github.com/itzdabbzz'>Dabz's TRPG</a> is a project by ItzDabbzz</p>
                <p>Copyright (c) 2022-{new Date().getFullYear()}</p>
                <p data-tooltip-id="license-tooltip" data-tooltip-html="MIT License<br/>Copyright (c) 2023 ItzDabbzz aka Davin Luirette<br/><br/>Permission is hereby granted, free of charge, to any person obtaining a copy<br/>of this software and associated documentation files (the &quot;Software&quot;), to deal<br/>in the Software without restriction, including without limitation the rights<br/>to use, copy, modify, merge, publish, distribute, sublicense, and/or sell<br/>copies of the Software, and to permit persons to whom the Software is<br/>furnished to do so, subject to the following conditions:<br/><br/>The above copyright notice and this permission notice shall be included in all<br/>copies or substantial portions of the Software.<br/><br/>THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR<br/>IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br/>FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE<br/>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER<br/>LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,<br/>OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE<br/>SOFTWARE.">Licensed under the MIT license.</p>
            </footer>
        </>
    );
}