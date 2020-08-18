1. Get original attributes
```
$user = User::first();
$user->name = Newvalue;
$user->getOriginal('name') // Oldvalue
```

2. check collection isChange
```
$user = User::first();
$user->isDirty() // false
$user->name = Newvalue;
$user->isDirty() // true
$user->isDirty('name) // true
```

3. get list attribute isChange
```
$user->getChanges() // ['name' => value]
```
