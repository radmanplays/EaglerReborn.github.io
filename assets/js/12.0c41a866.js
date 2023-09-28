(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{286:function(e,o,t){"use strict";t.r(o);var r=t(14),a=Object(r.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"making-patch-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#making-patch-files"}},[e._v("#")]),e._v(" Making patch files")]),e._v(" "),o("p",[e._v("In order to make your own patch files, you will need the following:")]),e._v(" "),o("ol",[o("li",[e._v("The minecraft 1.8.8 JAR")]),e._v(" "),o("li",[e._v("1.8.json")]),e._v(" "),o("li",[e._v("mcp918.zip(link "),o("a",{attrs:{href:"http://www.modcoderpack.com/files/mcp918.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("FFMPEG")])]),e._v(" "),o("hr"),e._v(" "),o("p",[o("sub",[e._v("Note: This tutorial only works on Linux or MacOS. To do this on Windows, either setup up a virtual machine or use WSL (preferably WSL 2).")])]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("First, move the 1.8.8 jar, the 1.8.json file, and mcp918.zip into the mcp918 folder."),o("br"),e._v("\nThen. open a terminal in the root directory of the repo."),o("br"),e._v("\nRun "),o("code",[e._v("java -jar buildtools/BuildTools.jar init")]),e._v(" in the terminal."),o("br"),e._v("\nAfter it's done, do "),o("code",[e._v("java -jar buildtools/BuildTools.jar workspace")]),e._v(". It should ask you what directory you want it in."),o("br"),e._v("\nAfter putting this info in, it should create the directory you specified and place a Gradle project inside."),o("br"),e._v("\nThis is the decompiled source of Minecraft 1.8.8, plus the patches."),o("br"),e._v("\nJust modify the files and do "),o("code",[e._v("./gradlew teavm")]),e._v(" inside the workspace to compile."),o("br"),e._v("\nThen do "),o("code",[e._v("bash CompileEPK.sh")]),e._v(" to get an assets.epk file."),o("br"),e._v("\nIf you want to quickly test, do "),o("code",[e._v("python -m http.server")]),e._v(" in the workspace and go to localhost:8000 in your browser."),o("br"),e._v("\nIf you want to make a pull request, do "),o("code",[e._v("java -jar buildtools/BuildTools.jar pullrequest")]),e._v(" to generate a pullrequest folder."),o("br"),e._v("\nThen, take this modified version of the repo and upload it to Github, make a pullrequest, and I will take a look."),o("br"),e._v("\nIf you are making your own fork of EaglerReborn and have it open source, you can do "),o("code",[e._v("java -jar buildtools/BuildTools.jar merge")]),e._v("\nto finish generating the patch files."),o("br"),e._v(" "),o("br"),e._v("\nTo make an offline download, run "),o("code",[e._v("bash MakeOfflineDownload.sh")]),e._v(" after running "),o("code",[e._v("./gradlew teavm")]),e._v(" and "),o("code",[e._v("bash CompileEPK.sh")])])])}),[],!1,null,null,null);o.default=a.exports}}]);