

with open('../names.txt', 'r') as f:
    names = f.read().split('\n')[:-1]

with open('./names.js', 'w') as f:
     for name in names:
         obj = {}
         obj['name'] = name
         obj['real'] = True
         f.write('%s,\n' % obj)
