"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26042],{39292:t=>{t.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/2023/08/05/","metadata":{"permalink":"/tests/blog/2023/08/05/","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2023-08-05.mdx","source":"@site/_dogfooding/_blog tests/2023-08-05.mdx","title":"Ensure heading anchor slugs respect GitHub emoji behavior","description":"This is a friendly header","date":"2023-08-05T00:00:00.000Z","tags":[],"readingTime":3.2,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Ensure heading anchor slugs respect GitHub emoji behavior","date":"2023-08-05T00:00:00.000Z"},"unlisted":false,"nextItem":{"title":"Test if href in feed resolved correctly","permalink":"/tests/blog/2023/07/19/a"}},"content":"## :smiley: This is a friendly header\\n\\n## \ud83d\ude03 This is a friendly header (real smiley)"},{"id":"/2023/07/19/a","metadata":{"permalink":"/tests/blog/2023/07/19/a","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2023-07-19-a.mdx","source":"@site/_dogfooding/_blog tests/2023-07-19-a.mdx","title":"Test if href in feed resolved correctly","description":"absolute full url","date":"2023-07-19T00:00:00.000Z","tags":[],"readingTime":2.2,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Test if href in feed resolved correctly"},"unlisted":false,"prevItem":{"title":"Ensure heading anchor slugs respect GitHub emoji behavior","permalink":"/tests/blog/2023/08/05/"},"nextItem":{"title":"Test Relative Path","permalink":"/tests/blog/2023/07/19/b"}},"content":"[absolute full url](https://github.com/facebook/docusaurus)\\n\\n[absolute url with implicit domain name](/tests/blog/2023/07/19/b)\\n\\n[relative url](2023-07-19-b.mdx)"},{"id":"/2023/07/19/b","metadata":{"permalink":"/tests/blog/2023/07/19/b","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2023-07-19-b.mdx","source":"@site/_dogfooding/_blog tests/2023-07-19-b.mdx","title":"Test Relative Path","description":"","date":"2023-07-19T00:00:00.000Z","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"Test if href in feed resolved correctly","permalink":"/tests/blog/2023/07/19/a"},"nextItem":{"title":"A post with html slug","permalink":"/tests/blog/x/y/z.html"}},"content":""},{"id":"/x/y/z.html","metadata":{"permalink":"/tests/blog/x/y/z.html","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2022-10-02-html-slug.mdx","source":"@site/_dogfooding/_blog tests/2022-10-02-html-slug.mdx","title":"A post with html slug","description":"This is a blog post with an html slug!","date":"2022-10-02T00:00:00.000Z","tags":[{"label":"paginated-tag","permalink":"/tests/blog/tags/paginated-tag"}],"readingTime":3.4,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"A post with html slug","tags":["paginated-tag"],"slug":"/x/y/z.html"},"unlisted":false,"prevItem":{"title":"Test Relative Path","permalink":"/tests/blog/2023/07/19/b"},"nextItem":{"title":"First post with footnote to test posts with same footnote reference.","permalink":"/tests/blog/2022/04/20/dup-footnote"}},"content":"This is a blog post with an html slug!\\n\\n```mdx-code-block\\nimport Partial from \\"./_partial.mdx\\"\\n\\n<Partial />\\n```"},{"id":"/2022/04/20/dup-footnote","metadata":{"permalink":"/tests/blog/2022/04/20/dup-footnote","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2022-04-20-dup-footnote.mdx","source":"@site/_dogfooding/_blog tests/2022-04-20-dup-footnote.mdx","title":"First post with footnote to test posts with same footnote reference.","description":"foo","date":"2022-04-20T00:00:00.000Z","tags":[],"readingTime":1.8,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"First post with footnote to test posts with same footnote reference."},"unlisted":false,"prevItem":{"title":"A post with html slug","permalink":"/tests/blog/x/y/z.html"},"nextItem":{"title":"Second post with footnote to test posts with same footnote reference.","permalink":"/tests/blog/2022/01/22/dup-footnote"}},"content":"foo[^1]\\n\\nbar[^2]\\n\\nbaz[^3]\\n\\n[^1]: foo\\n[^2]: bar\\n[^3]: baz"},{"id":"/2022/01/22/dup-footnote","metadata":{"permalink":"/tests/blog/2022/01/22/dup-footnote","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2022-01-22-dup-footnote.mdx","source":"@site/_dogfooding/_blog tests/2022-01-22-dup-footnote.mdx","title":"Second post with footnote to test posts with same footnote reference.","description":"foo","date":"2022-01-22T00:00:00.000Z","tags":[],"readingTime":1.8,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Second post with footnote to test posts with same footnote reference."},"unlisted":false,"prevItem":{"title":"First post with footnote to test posts with same footnote reference.","permalink":"/tests/blog/2022/04/20/dup-footnote"},"nextItem":{"title":"Third post with footnote to test posts with same footnote reference.","permalink":"/tests/blog/2022/01/21/dup-footnote"}},"content":"foo[^1]\\n\\nbar[^2]\\n\\nbaz[^3]\\n\\n[^1]: foo\\n[^2]: bar\\n[^3]: baz"},{"id":"/2022/01/21/dup-footnote","metadata":{"permalink":"/tests/blog/2022/01/21/dup-footnote","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2022-01-21-dup-footnote.mdx","source":"@site/_dogfooding/_blog tests/2022-01-21-dup-footnote.mdx","title":"Third post with footnote to test posts with same footnote reference.","description":"foo","date":"2022-01-21T00:00:00.000Z","tags":[],"readingTime":1.8,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Third post with footnote to test posts with same footnote reference."},"unlisted":false,"prevItem":{"title":"Second post with footnote to test posts with same footnote reference.","permalink":"/tests/blog/2022/01/22/dup-footnote"},"nextItem":{"title":"Image-only authors","permalink":"/tests/blog/2022/01/20/image-only-authors"}},"content":"foo[^1]\\n\\nbar[^2]\\n\\nbaz[^3]\\n\\n[^1]: foo\\n[^2]: bar\\n[^3]: baz"},{"id":"/2022/01/20/image-only-authors","metadata":{"permalink":"/tests/blog/2022/01/20/image-only-authors","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2022-01-20-image-only-authors.mdx","source":"@site/_dogfooding/_blog tests/2022-01-20-image-only-authors.mdx","title":"Image-only authors","description":"You can make a compact authors list without author names!","date":"2022-01-20T00:00:00.000Z","tags":[{"label":"paginated-tag","permalink":"/tests/blog/tags/paginated-tag"}],"readingTime":2,"hasTruncateMarker":false,"authors":[{"image_url":"https://github.com/endiliey.png","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png"},{"image_url":"https://github.com/lex111.png","url":"https://github.com/lex111","imageURL":"https://github.com/lex111.png"},{"image_url":"https://github.com/slorber.png","url":"https://github.com/slorber","imageURL":"https://github.com/slorber.png"},{"image_url":"https://github.com/yangshun.png","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png"},{"image_url":"https://github.com/JoelMarcey.png","url":"https://github.com/JoelMarcey","imageURL":"https://github.com/JoelMarcey.png"},{"image_url":"https://github.com/Josh-Cena.png","url":"https://github.com/Josh-Cena","imageURL":"https://github.com/Josh-Cena.png"},{"image_url":"https://github.com/deltice.png","url":"https://github.com/deltice","imageURL":"https://github.com/deltice.png"},{"image_url":"https://github.com/SamChou19815.png","url":"https://github.com/SamChou19815","imageURL":"https://github.com/SamChou19815.png"},{"image_url":"https://github.com/ericnakagawa.png","url":"https://github.com/ericnakagawa","imageURL":"https://github.com/ericnakagawa.png"},{"image_url":"https://github.com/Simek.png","url":"https://github.com/Simek","imageURL":"https://github.com/Simek.png"},{"image_url":"https://github.com/hramos.png","url":"https://github.com/hramos","imageURL":"https://github.com/hramos.png"},{"image_url":"https://github.com/wgao19.png","url":"https://github.com/wgao19","imageURL":"https://github.com/wgao19.png"},{"image_url":"https://github.com/rickyvetter.png","url":"https://github.com/rickyvetter","imageURL":"https://github.com/rickyvetter.png"},{"image_url":"https://github.com/fanny.png","url":"https://github.com/fanny","imageURL":"https://github.com/fanny.png"},{"image_url":"https://github.com/armano2.png","url":"https://github.com/armano2","imageURL":"https://github.com/armano2.png"},{"image_url":"https://github.com/RDIL.png","url":"https://github.com/RDIL","imageURL":"https://github.com/RDIL.png"},{"image_url":"https://github.com/teikjun.png","url":"https://github.com/teikjun","imageURL":"https://github.com/teikjun.png"},{"image_url":"https://github.com/hong4rc.png","url":"https://github.com/hong4rc","imageURL":"https://github.com/hong4rc.png"},{"image_url":"https://github.com/anshulrgoyal.png","url":"https://github.com/anshulrgoyal","imageURL":"https://github.com/anshulrgoyal.png"},{"image_url":"https://github.com/italicize.png","url":"https://github.com/italicize","imageURL":"https://github.com/italicize.png"}],"frontMatter":{"authors":[{"image_url":"https://github.com/endiliey.png","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png"},{"image_url":"https://github.com/lex111.png","url":"https://github.com/lex111","imageURL":"https://github.com/lex111.png"},{"image_url":"https://github.com/slorber.png","url":"https://github.com/slorber","imageURL":"https://github.com/slorber.png"},{"image_url":"https://github.com/yangshun.png","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png"},{"image_url":"https://github.com/JoelMarcey.png","url":"https://github.com/JoelMarcey","imageURL":"https://github.com/JoelMarcey.png"},{"image_url":"https://github.com/Josh-Cena.png","url":"https://github.com/Josh-Cena","imageURL":"https://github.com/Josh-Cena.png"},{"image_url":"https://github.com/deltice.png","url":"https://github.com/deltice","imageURL":"https://github.com/deltice.png"},{"image_url":"https://github.com/SamChou19815.png","url":"https://github.com/SamChou19815","imageURL":"https://github.com/SamChou19815.png"},{"image_url":"https://github.com/ericnakagawa.png","url":"https://github.com/ericnakagawa","imageURL":"https://github.com/ericnakagawa.png"},{"image_url":"https://github.com/Simek.png","url":"https://github.com/Simek","imageURL":"https://github.com/Simek.png"},{"image_url":"https://github.com/hramos.png","url":"https://github.com/hramos","imageURL":"https://github.com/hramos.png"},{"image_url":"https://github.com/wgao19.png","url":"https://github.com/wgao19","imageURL":"https://github.com/wgao19.png"},{"image_url":"https://github.com/rickyvetter.png","url":"https://github.com/rickyvetter","imageURL":"https://github.com/rickyvetter.png"},{"image_url":"https://github.com/fanny.png","url":"https://github.com/fanny","imageURL":"https://github.com/fanny.png"},{"image_url":"https://github.com/armano2.png","url":"https://github.com/armano2","imageURL":"https://github.com/armano2.png"},{"image_url":"https://github.com/RDIL.png","url":"https://github.com/RDIL","imageURL":"https://github.com/RDIL.png"},{"image_url":"https://github.com/teikjun.png","url":"https://github.com/teikjun","imageURL":"https://github.com/teikjun.png"},{"image_url":"https://github.com/hong4rc.png","url":"https://github.com/hong4rc","imageURL":"https://github.com/hong4rc.png"},{"image_url":"https://github.com/anshulrgoyal.png","url":"https://github.com/anshulrgoyal","imageURL":"https://github.com/anshulrgoyal.png"},{"image_url":"https://github.com/italicize.png","url":"https://github.com/italicize","imageURL":"https://github.com/italicize.png"}],"tags":["paginated-tag"]},"unlisted":false,"prevItem":{"title":"Third post with footnote to test posts with same footnote reference.","permalink":"/tests/blog/2022/01/21/dup-footnote"},"nextItem":{"title":"Post with duplicate title","permalink":"/tests/blog/2021/11/13/dup-title"}},"content":"You can make a compact authors list without author names!"},{"id":"/2021/11/13/dup-title","metadata":{"permalink":"/tests/blog/2021/11/13/dup-title","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2021-11-13-dup-title.mdx","source":"@site/_dogfooding/_blog tests/2021-11-13-dup-title.mdx","title":"Post with duplicate title","description":"I hope I\'m still here","date":"2021-11-13T00:00:00.000Z","tags":[{"label":"paginated-tag","permalink":"/tests/blog/tags/paginated-tag"}],"readingTime":1,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["paginated-tag"]},"unlisted":false,"prevItem":{"title":"Image-only authors","permalink":"/tests/blog/2022/01/20/image-only-authors"},"nextItem":{"title":"Blog post MDX require Feed tests","permalink":"/tests/blog/2021/10/08/blog-post-mdx-require-feed-tests"}},"content":"I hope I\'m still here"},{"id":"/2021/10/08/blog-post-mdx-require-feed-tests","metadata":{"permalink":"/tests/blog/2021/10/08/blog-post-mdx-require-feed-tests","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2021-10-08-blog-post-mdx-require-feed-tests.mdx","source":"@site/_dogfooding/_blog tests/2021-10-08-blog-post-mdx-require-feed-tests.mdx","title":"Blog post MDX require Feed tests","description":"Some MDX tests, mostly to test how the RSS feed render those","date":"2021-10-08T00:00:00.000Z","tags":[{"label":"paginated-tag","permalink":"/tests/blog/tags/paginated-tag"},{"label":"blog","permalink":"/tests/blog/tags/blog"},{"label":"docusaurus","permalink":"/tests/blog/tags/docusaurus"},{"label":"long-long","permalink":"/tests/blog/tags/long-long"},{"label":"long-long-long","permalink":"/tests/blog/tags/long-long-long"},{"label":"long-long-long-long","permalink":"/tests/blog/tags/long-long-long-long"}],"readingTime":6.6,"hasTruncateMarker":true,"authors":[{"name":"Sebastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","twitter":"sebastienlorber","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"Blog post MDX require Feed tests","authors":["slorber"],"tags":["paginated-tag","blog","docusaurus","long-long","long-long-long","long-long-long-long"]},"unlisted":false,"prevItem":{"title":"Post with duplicate title","permalink":"/tests/blog/2021/11/13/dup-title"},"nextItem":{"title":"Blog post MDX Feed tests","permalink":"/tests/blog/2021/10/07/blog-post-mdx-feed-tests"}},"content":"Some MDX tests, mostly to test how the RSS feed render those\\n\\n{/* truncate */}\\n\\nTest MDX with require calls\\n\\nimport useBaseUrl from \'@docusaurus/useBaseUrl\';\\n\\n<img src={useBaseUrl(\'/img/docusaurus.png\')} />\\n\\n<img src={require(\'../../static/img/docusaurus.png\').default} />\\n\\n<img src={require(\'@site/static/img/docusaurus.png\').default} />"},{"id":"/2021/10/07/blog-post-mdx-feed-tests","metadata":{"permalink":"/tests/blog/2021/10/07/blog-post-mdx-feed-tests","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2021-10-07-blog-post-mdx-feed-tests.mdx","source":"@site/_dogfooding/_blog tests/2021-10-07-blog-post-mdx-feed-tests.mdx","title":"Blog post MDX Feed tests","description":"Some MDX tests, mostly to test how the RSS feed render those","date":"2021-10-07T00:00:00.000Z","tags":[{"label":"paginated-tag","permalink":"/tests/blog/tags/paginated-tag"},{"label":"blog","permalink":"/tests/blog/tags/blog"},{"label":"docusaurus","permalink":"/tests/blog/tags/docusaurus"},{"label":"long-long","permalink":"/tests/blog/tags/long-long"},{"label":"long-long-long","permalink":"/tests/blog/tags/long-long-long"},{"label":"long-long-long-long","permalink":"/tests/blog/tags/long-long-long-long"}],"hasTruncateMarker":true,"authors":[{"name":"Sebastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","twitter":"sebastienlorber","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"Blog post MDX Feed tests","authors":["slorber"],"tags":["paginated-tag","blog","docusaurus","long-long","long-long-long","long-long-long-long"],"hide_reading_time":true},"unlisted":false,"prevItem":{"title":"Blog post MDX require Feed tests","permalink":"/tests/blog/2021/10/08/blog-post-mdx-require-feed-tests"},"nextItem":{"title":"Post with duplicate title","permalink":"/tests/blog/2021/09/13/dup-title"}},"content":"Some MDX tests, mostly to test how the RSS feed render those\\n\\n{/* truncate */}\\n\\n## Imports\\n\\nHere are some imports:\\n\\nimport Tabs from \'@theme/Tabs\';\\nimport TabItem from \'@theme/TabItem\';\\n\\n## Exports\\n\\nHere are some exports:\\n\\nexport const someExport = 42;\\n\\n## Tabs test\\n\\nHere are some tabs:\\n\\n<Tabs>\\n  <TabItem value=\\"apple\\" label=\\"Apple\\">\\n    This is an apple \ud83c\udf4e\\n  </TabItem>\\n  <TabItem value=\\"orange\\" label=\\"Orange\\">\\n    This is an orange \ud83c\udf4a\\n  </TabItem>\\n</Tabs>\\n\\nHere are some tabs, inside `mdx-code-block`:\\n\\n```mdx-code-block\\n<Tabs>\\n  <TabItem value=\\"apple\\" label=\\"Apple\\">\\n    This is an apple \ud83c\udf4e\\n  </TabItem>\\n  <TabItem value=\\"orange\\" label=\\"Orange\\">\\n    This is an orange \ud83c\udf4a\\n  </TabItem>\\n</Tabs>\\n```"},{"id":"/2021/09/13/dup-title","metadata":{"permalink":"/tests/blog/2021/09/13/dup-title","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2021-09-13-dup-title.mdx","source":"@site/_dogfooding/_blog tests/2021-09-13-dup-title.mdx","title":"Post with duplicate title","description":"See https://github.com/facebook/docusaurus/issues/6059. This one and 2021-11-13-dup-title.md should both show up.","date":"2021-09-13T00:00:00.000Z","tags":[{"label":"paginated-tag","permalink":"/tests/blog/tags/paginated-tag"}],"readingTime":2,"hasTruncateMarker":false,"authors":[{"name":"Josh-Cena1"},{"name":"Josh-Cena2","image_url":"https://github.com/Josh-Cena.png","imageURL":"https://github.com/Josh-Cena.png"},{"name":"Josh-Cena3","url":"https://github.com/Josh-Cena"},{"name":"Josh-Cena4","email":"sidechen2003@gmail.com"}],"frontMatter":{"tags":["paginated-tag"],"authors":[{"name":"Josh-Cena1"},{"name":"Josh-Cena2","image_url":"https://github.com/Josh-Cena.png","imageURL":"https://github.com/Josh-Cena.png"},{"name":"Josh-Cena3","url":"https://github.com/Josh-Cena"},{"name":"Josh-Cena4","email":"sidechen2003@gmail.com"}]},"unlisted":false,"prevItem":{"title":"Blog post MDX Feed tests","permalink":"/tests/blog/2021/10/07/blog-post-mdx-feed-tests"},"nextItem":{"title":"Multiple authors","permalink":"/tests/blog/2021/08/23/multiple-authors"}},"content":"See https://github.com/facebook/docusaurus/issues/6059. This one and [2021-11-13-dup-title.md](./2021-11-13-dup-title.mdx) should both show up."},{"id":"/2021/08/23/multiple-authors","metadata":{"permalink":"/tests/blog/2021/08/23/multiple-authors","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2021-08-23-multiple-authors.mdx","source":"@site/_dogfooding/_blog tests/2021-08-23-multiple-authors.mdx","title":"Multiple authors","description":"You can have multiple authors for one blog post!","date":"2021-08-23T00:00:00.000Z","tags":[{"label":"blog","permalink":"/tests/blog/tags/blog"},{"label":"docusaurus","permalink":"/tests/blog/tags/docusaurus"},{"label":"paginated-tag","permalink":"/tests/blog/tags/paginated-tag"},{"label":"long","permalink":"/tests/blog/tags/long"},{"label":"long-long","permalink":"/tests/blog/tags/long-long"},{"label":"long-long-long","permalink":"/tests/blog/tags/long-long-long"},{"label":"long-long-long-long","permalink":"/tests/blog/tags/long-long-long-long"},{"label":"long-long-long-long-long","permalink":"/tests/blog/tags/long-long-long-long-long"}],"readingTime":1.8,"hasTruncateMarker":false,"authors":[{"name":"Sebastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","twitter":"sebastienlorber","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Josh-Cena","image_url":"https://avatars.githubusercontent.com/u/55398995?v=4","url":"https://joshcena.com","imageURL":"https://avatars.githubusercontent.com/u/55398995?v=4"}],"frontMatter":{"authors":["slorber",{"name":"Josh-Cena","image_url":"https://avatars.githubusercontent.com/u/55398995?v=4","url":"https://joshcena.com","imageURL":"https://avatars.githubusercontent.com/u/55398995?v=4"}],"tags":["blog","docusaurus","paginated-tag","long","long-long","long-long-long","long-long-long-long","long-long-long-long-long"]},"unlisted":false,"prevItem":{"title":"Post with duplicate title","permalink":"/tests/blog/2021/09/13/dup-title"},"nextItem":{"title":"Hmmm!","permalink":"/tests/blog/2021/08/22/no-author"}},"content":"You can have multiple authors for one blog post!"},{"id":"/2021/08/22/no-author","metadata":{"permalink":"/tests/blog/2021/08/22/no-author","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2021-08-22-no-author.mdx","source":"@site/_dogfooding/_blog tests/2021-08-22-no-author.mdx","title":"Hmmm!","description":"This is a blog post from an anonymous author!","date":"2021-08-22T00:00:00.000Z","tags":[{"label":"paginated-tag","permalink":"/tests/blog/tags/paginated-tag"}],"readingTime":3.4,"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["paginated-tag"]},"unlisted":false,"prevItem":{"title":"Multiple authors","permalink":"/tests/blog/2021/08/23/multiple-authors"},"nextItem":{"title":"Blog TOC FrontMatter tests","permalink":"/tests/blog/2021/08/21/blog-post-toc-tests"}},"content":"This is a blog post from an anonymous author!\\n\\n```mdx-code-block\\nimport Partial from \\"./_partial.mdx\\"\\n\\n<Partial />\\n```"},{"id":"/2021/08/21/blog-post-toc-tests","metadata":{"permalink":"/tests/blog/2021/08/21/blog-post-toc-tests","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/2021-08-21-blog-post-toc-tests.mdx","source":"@site/_dogfooding/_blog tests/2021-08-21-blog-post-toc-tests.mdx","title":"Blog TOC FrontMatter tests","description":"{/ truncate /}","date":"2021-08-21T00:00:00.000Z","tags":[{"label":"paginated-tag","permalink":"/tests/blog/tags/paginated-tag"}],"readingTime":1.8,"hasTruncateMarker":true,"authors":[{"name":"Sebastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","twitter":"sebastienlorber","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"Blog TOC FrontMatter tests","authors":["slorber"],"toc_min_heading_level":2,"toc_max_heading_level":4,"tags":["paginated-tag"]},"unlisted":false,"prevItem":{"title":"Hmmm!","permalink":"/tests/blog/2021/08/22/no-author"},"nextItem":{"title":"Using twice the blog plugin","permalink":"/tests/blog/2020/08/03/demo/second-blog-intro"}},"content":"{/* truncate */}\\n\\nimport Content from \'@site/_dogfooding/_partials/toc-tests.mdx\';\\n\\n<Content />"},{"id":"/2020/08/03/demo/second-blog-intro","metadata":{"permalink":"/tests/blog/2020/08/03/demo/second-blog-intro","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_blog-tests/_dogfooding/_blog tests/demo/2020-08-03-second-blog-intro.mdx","source":"@site/_dogfooding/_blog tests/demo/2020-08-03-second-blog-intro.mdx","title":"Using twice the blog plugin","description":"Did you know you can use multiple instances of the same plugin?","date":"2020-08-03T00:00:00.000Z","tags":[{"label":"paginated-tag","permalink":"/tests/blog/tags/paginated-tag"},{"label":"blog","permalink":"/tests/blog/tags/blog"},{"label":"docusaurus","permalink":"/tests/blog/tags/docusaurus"}],"readingTime":7,"hasTruncateMarker":true,"authors":[{"name":"Sebastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","twitter":"sebastienlorber","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"Using twice the blog plugin","authors":["slorber"],"tags":["paginated-tag","blog","docusaurus"]},"unlisted":false,"prevItem":{"title":"Blog TOC FrontMatter tests","permalink":"/tests/blog/2021/08/21/blog-post-toc-tests"}},"content":"Did you know you can use multiple instances of the same plugin?\\n\\n{/* truncate */}\\n\\n:::tip\\n\\nUsing twice the blog plugin permits you to create more than one blog on the same Docusaurus website!\\n\\n:::"}]}}')}}]);