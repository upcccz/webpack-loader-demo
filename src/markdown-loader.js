const marked = require('marked'); // 可以将marked转换为html

module.exports = (source) => {
  console.log('source', source);
  
  // return source; 
  // error 接受到的source是md文件的内容，loader必须要返回一个合格js代码字符串，可以理解为能够被eval执行

  const html = marked(source)
  // return html; 
  //  <h2 id="我是二级标题">我是二级标题</h2>
  //  <h3 id="我是三级标题">我是三级标题</h3>
  //  <p>我是内容</p>
  //  也会报错，因为只能接受js代码字符串
  // 所以需要将 html 字符串转换为 js代码字符安

  // 第一种 自己拼接
  // const result = `module.exports = ${JSON.stringify(html)}`;
  // return result 

  // 第二种 使用 html-loader，在webpack配置里面，在针对.md文件的配置中
  // 在自己写的 markdown-loader 之前插入 html-loader
  // 那么 我们这个 markdown-loader处理之后返回的 html字符串，就会交给 html-loader去处理
  // 这个loader会将html处理成js
  return html;
}