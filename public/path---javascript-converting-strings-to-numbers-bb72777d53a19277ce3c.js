webpackJsonp([0x70e91df9a33fcc00],{"./node_modules/json-loader/index.js!./.cache/json/javascript-converting-strings-to-numbers.json":function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Converting Strings to Numbers</h2>\n<p>The <code>parseInt()</code> function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>    <span class="token function">parseInt</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> radix<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>Parameters</h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>string</code></pre>\n      </div>\n<p>The value to parse. If the <code>string</code> argument is not a string, then it is converted to a string (using the <code>ToString</code> abstract operation). Leading whitespace in the string argument is ignored.’=\nradix\nAn integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the above mentioned string. Specify <code>10</code> for the decimal numeral system commonly used by humans. Always specify this parameter to eliminate reader confusion and to guarantee predictable behavior. Different implementations produce different results when a radix is not specified, usually defaulting the value to 10.\nReturn value\nAn integer number parsed from the given string. If the first character cannot be converted to a number, <code>NaN</code> is returned.</p>\n<h3>Description</h3>\n<p>The <code>parseInt</code> function converts its first argument to a string, parses it, and returns an integer or <code>NaN</code>. If not <code>NaN</code>, the returned value will be the integer that is the first argument taken as a number in the specified radix (base). For example, a radix of 10 indicates to convert from a decimal number, 8 octal, 16 hexadecimal, and so on. For radices above <code>10</code>, the letters of the alphabet indicate numerals greater than 9. For example, for hexadecimal numbers (base 16),<code>A</code> through <code>F</code> is used.</p>\n<p>If <code>parseInt</code> encounters a character that is not a numeral in the specified radix, it ignores it and all succeeding characters and returns the integer value parsed up to that point. <code>parseInt</code> truncates numbers to integer values. Leading and trailing spaces are allowed.</p>\n<p>Because some numbers include the <code>e</code> character in their string representation (e.g. <code>6.022e23</code>), using <code>parseInt</code> to truncate numeric values will produce unexpected results when used on very large or very small numbers. <code>parseInt</code> should not be used as a substitute for <code>Math.floor()</code>.</p>\n<p>If radix is <code>undefined</code> or 0 (or absent), JavaScript assumes the following:</p>\n<ul>\n<li>If the input <code>string</code> begins with “0x” or “0X”, radix is 16 (hexadecimal) and the remainder of the string is parsed.</li>\n<li>If the input <code>string</code> begins with “0”, radix is eight (octal) or 10 (decimal).  Exactly which radix is chosen is implementation-dependent.  ECMAScript 5 specifies that 10 (decimal) is used, but not all browsers support this yet.  For this reason, always specify a radix when using parseInt.</li>\n<li>If the input <code>string</code> begins with any other value, the radix is 10 (decimal).</li>\n<li>If the first character cannot be converted to a number, parseInt returns NaN.</li>\n</ul>\n<p>For arithmetic purposes, the NaN value is not a number in any radix. You can call the isNaN function to determine if the result of parseInt is NaN. If NaN is passed on to arithmetic operations, the operation results will also be NaN.</p>\n<p>To convert the number to its string literal in a particular radix use intValue.toString(radix).</p>\n<h3>Examples</h3>\n<p>Using <code>parseInt</code>\nThe following examples all return <code>15</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\' 0xF\'</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\' F\'</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'17\'</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token number">021</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'015\'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment" spellcheck="true">// parseInt(015, 10); will return 15</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token number">15.99</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'15,123\'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'FXX123\'</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'1111\'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'15 * 3\'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'15e2\'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'15px\'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'12\'</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The following examples all return <code>NaN</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'Hello\'</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Not a number at all</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'546\'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment" spellcheck="true">// Digits are not valid for binary representations</span>\n</code></pre>\n      </div>\n<p>The following examples all return <code>-15</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'-F\'</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'-0F\'</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'-0XF\'</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">15.1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\' -17\'</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\' -15\'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'-1111\'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'-15e1\'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'-12\'</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The following examples all return <code>4</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token number">4.7</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token number">4.7</span> <span class="token operator">*</span> <span class="token number">1e22</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Very large number becomes 4</span>\n    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token number">0.00000000000434</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Very small number becomes 4</span>\n</code></pre>\n      </div>\n<p>The following example returns <code>224</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>    <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'0e0\'</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h4>More Information:</h4>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">parseInt on MDN</a></p>\n<ul>\n<li><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt\' target=\'_blank\' rel=\'nofollow\'>parseInt()</a> and <a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat\' target=\'_blank\' rel=\'nofollow\'>parseFloat()</a> attempt to convert the string to a number if possible. For example, <code>var x = parseInt("100"); // x = 100</code></li>\n<li><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number\' target=\'_blank\' rel=\'nofollow\'>Number()</a> will convert to a number the value can be represented by. This includes dates into the number of milliseconds since midnight January 1, 1970 UTC, boolean values to 1 or 0, and values that can’t be converted to a recognisable number will become NaN. That stands for Not a Number and is also technically a number!</li>\n</ul>',fields:{slug:"/javascript/converting-strings-to-numbers/"},frontmatter:{title:"Converting Strings to Numbers"}}},pathContext:{slug:"/javascript/converting-strings-to-numbers/"}}}});
//# sourceMappingURL=path---javascript-converting-strings-to-numbers-bb72777d53a19277ce3c.js.map