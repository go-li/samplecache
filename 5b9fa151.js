jscallback({"body":"package main\n\n// creates a new list header\nfunc Mklist(link func(*, byte)(**), list *) {\n\t*link(list, 0) = list\n\t*link(list, 1) = list\n}\n\n// inserts item to list\nfunc Insert(link func(*, byte)(**), list *, elm *) {\n\t*link(elm, 0) = list\n\t*link(elm, 1) = *link(list, 1)\n\t*link(list, 1) = elm\n\t*link(*link(elm, 1), 0) = elm\n}\n\n// remove item from list.\nfunc Remove(link func(*, byte)(**), elm *) {\n\t*link(*link(elm, 0), 1) = *link(elm, 1)\n\t*link(*link(elm, 1), 0) = *link(elm, 0)\n}\n\n// is list empty?\nfunc Empty(link func(*, byte)(**), list *) bool {\n\treturn *link(list, 1) == list;\n}\n\n// do count of the list items\nfunc Len(link func(*, byte)(**), list *) (count int) {\n\te := *link(list, 1)\n\tfor e != list {\n\t\te = *link(e, 1)\n\t\tcount++;\n\t}\n\treturn count\n}\n\n////////////////////\ntype baz struct {\n\tprimesprevnext [2]*baz\n\tallprevnext [2]*baz\n\tsomevalue int\n}\n\nfunc primelink(w *baz, b byte) (lr **baz) {\n\treturn \u0026(w.primesprevnext[b])\n}\n\nfunc alllink(w *baz, b byte) (lr **baz) {\n\treturn \u0026(w.allprevnext[b])\n}\n///////////////////////////////\nfunc main() {\n\tvar u, v, w, x, y, z, header baz\n\tu.somevalue = 13\n\tv.somevalue = 11\n\tw.somevalue = 15\n\tx.somevalue = 14\n\ty.somevalue = 19\n\tz.somevalue = 12\n\n\t// head object serves as a beginning, entry point of the 2 lists\n\tMklist(primelink, \u0026header)\n\n//add objects to prime list\n\tInsert(primelink, \u0026header, \u0026z)\n\tInsert(primelink, \u0026header, \u0026u)\n\tInsert(primelink, \u0026header, \u0026v)\n\tInsert(primelink, \u0026header, \u0026y)\n\tRemove(primelink, \u0026z)\n\tvar primes = Len(primelink, \u0026u)\n\n// initialize and add objects to another list\n\tMklist(alllink, \u0026header)\n\tInsert(alllink, \u0026header, \u0026u)\n\tInsert(alllink, \u0026header, \u0026v)\n\tInsert(alllink, \u0026header, \u0026w)\n\tInsert(alllink, \u0026header, \u0026x)    \n\tInsert(alllink, \u0026header, \u0026y)\n\tInsert(alllink, \u0026header, \u0026z)\n\n// count objects in lists\n\tvar all = Len(alllink, \u0026header)\n\tprint(primes)\n\tprint(\" primes\\n all:\")\n\tprint(all)\n}"}
);