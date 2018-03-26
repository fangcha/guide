webpackJsonp([0x20ddbc664d5fb800],{"./node_modules/json-loader/index.js!./.cache/json/python-string-split-method.json":function(n,s){n.exports={data:{markdownRemark:{html:'<p>The <code>split()</code> function is commonly used for string splitting in Python. </p>\n<h4>The <code>split()</code> method</h4>\n<p>Template: <code>string.split(separator, maxsplit)</code></p>\n<p><code>separator</code>: The delimiter string. You split the string based on this character. For eg. it could be ” ”, ”:”, ”;” etc</p>\n<p><code>maxsplit</code>: The number of times to split the string based on the <code>separator</code>. If not specified or -1, the string is split based on all occurrences of the <code>separator</code></p>\n<p>This method returns a list of substrings delimited by the <code>separator</code></p>\n<h4>Examples</h4>\n<ol>\n<li>\n<p>Split string on space: ” ”</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">"freeCodeCamp is fun."</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Output:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token punctuation">[</span><span class="token string">\'freeCodeCamp\'</span><span class="token punctuation">,</span> <span class="token string">\'is\'</span><span class="token punctuation">,</span> <span class="token string">\'fun.\'</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>Split string on comma: ”,”</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">"freeCodeCamp,is fun, and informative"</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Output:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token punctuation">[</span><span class="token string">\'freeCodeCamp\'</span><span class="token punctuation">,</span> <span class="token string">\'is fun\'</span><span class="token punctuation">,</span> <span class="token string">\' and informative\'</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>No <code>separator</code> specified</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">"freeCodeCamp is fun and informative"</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Output:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token punctuation">[</span><span class="token string">\'freeCodeCamp\'</span><span class="token punctuation">,</span> <span class="token string">\'is\'</span><span class="token punctuation">,</span> <span class="token string">\'fun\'</span><span class="token punctuation">,</span> <span class="token string">\'and\'</span><span class="token punctuation">,</span> <span class="token string">\'informative\'</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>Note: If no <code>separator</code> is specified, then the string is stripped of <strong>all</strong> whitespace</p>\n</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">"freeCodeCamp        is     fun and    informative"</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Output:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token punctuation">[</span><span class="token string">\'freeCodeCamp\'</span><span class="token punctuation">,</span> <span class="token string">\'is\'</span><span class="token punctuation">,</span> <span class="token string">\'fun\'</span><span class="token punctuation">,</span> <span class="token string">\'and\'</span><span class="token punctuation">,</span> <span class="token string">\'informative\'</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<ol start="3">\n<li>\n<p>Split string using <code>maxsplit</code>. Here we split the string on ” ” twice:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">"freeCodeCamp is fun and informative"</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Output:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token punctuation">[</span><span class="token string">\'freeCodeCamp\'</span><span class="token punctuation">,</span> <span class="token string">\'is\'</span><span class="token punctuation">,</span> <span class="token string">\'fun and informative\'</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n</li>\n</ol>\n<h4>More Information</h4>\n<p>Check out the <a href=\'https://docs.python.org/2/library/stdtypes.html#str.split\' target=\'_blank\' rel=\'nofollow\'>Python docs on string splitting</a></p>',fields:{slug:"/python/string-split-method/"},frontmatter:{title:"String Split Method"}}},pathContext:{slug:"/python/string-split-method/"}}}});
//# sourceMappingURL=path---python-string-split-method-36d49bb7a3a3fe84f77e.js.map