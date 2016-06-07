jscallback({"body":"package main\n\n\n\nfunc Deduplicate(compare func(*,*)int, arry []*) (l int) {\n l = len(arry)\n for i:=0;i\u003cl;i++{\n   for ((compare(arry[l-1], arry[i])==0) \u0026\u0026 (l-1 \u003e i)){\n        l--\n\t}\n  for j:=i+1;j\u003cl;j++{\n\n   if(compare(arry[j], arry[i])==0){\n        arry[i] = arry[l-1]\n        l--\n     }\n  }\n }\n  return l\n}\n\ntype man struct {\nname string\nid byte\n}\n\nfunc compare_man_by_id(l *man, r *man) int {\n      return int(l.id) - int(r.id)\n}\n\n\nfunc main() {\n\tvar y = []*man{\u0026man{\"Bob\",0},\u0026man{\"Pat\",1},\u0026man{\"Bob\",0},\u0026man{\"Rob\",2},\u0026man{\"Bob\",0}}\n\n\ty = y[:Deduplicate(compare_man_by_id, y)]\n\n\tfor n := range y {\n\t\tvar x man = *(y[n])\n\t\tprint(x.name)\n\t\tprint(\" \")\n\t\tprint(x.id)\n\t\tprint(\"\\n\")\n\t}\n\n\tprint(\"---------------\\n\")\n\n\tvar x = []*man{\u0026man{\"Bob\",0},\u0026man{\"Pat\",1},\u0026man{\"Tim\",3}}\n\n\tvar z []*man\n\n\t// Let's do union of x,y, result is z\n\n\n\tz = append(z, x...)\n\tz = append(z, y...)\n\tz = z[:Deduplicate(compare_man_by_id, z)]\n\n\n\tfor n := range z {\n\t\tvar m man = *(z[n])\n\t\tprint(m.name)\n\t\tprint(\" \")\n\t\tprint(m.id)\n\t\tprint(\"\\n\")\n\t}\n\n}\n"}
);