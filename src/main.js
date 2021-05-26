import demo from './demo.md';

console.log(demo); // 返回被处理过的  htmlLoader(markdownLoader(md文件))， js字符串，表示一个html。

// 我们最后执行 node ./dist/bundle.js 就能打印出这个字符传了