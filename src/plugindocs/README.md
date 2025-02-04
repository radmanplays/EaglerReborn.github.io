# Plugin API
The Plugin API consists of a global JavaScript object on the window, called, very simply, `PluginAPI`.


It has the following properties:
- `player: LocalPlayerData`
    - A [`LocalPlayerData`](globals/LocalPlayerData.md) made from `EntityPlayerSP`.
- `items: ItemData{}`
    - A [`ItemData`](globals/ItemData.md) dictionary of all item types, and block-item types. [Auto]
- `blocks: BlockData{}`
    - A [`BlockData`](globals/BlockData.md) dictionary of all block types. [Auto]
- `materials: MaterialData{}`
    - A [`MaterialData`](globals/MaterialData.md) dictionary of all the block materials. [Auto]
- `enchantments: EnchantmentData{}`
    - An [`EnchantmentData`](EnchantmentData.md) dictionary of all the in-game enchantments. [Auto]
- `constructors: Object`
    A object containing constructors to make some Java objects from within JavaScript. [Auto]
- `version: String`


It has the following methods:
- `addEventListener(eventName: String, callback: Function) : void`
    - Documentation [here](events/addEventListener.md)
- `require(componentName: String)`
    - Documentation [here](globals/require.md)
- `updateComponent(componentName: String)`
    - [Deprecated, use `reload()` instead] 
    - Documentation [here](globals/updateComponent.md)
- `displayToChat({msg: String})`
    - Displays client-side message to user's ingame chat gui.


### Using non-auto properties
In order to use non-auto properties like `PluginAPI.player`, they must be [required](globals/require.md)

### Triggering data updates (`reload()`)
To trigger the game to read your updated values, call the `reload()` method on the object.

Eg: 
```
PluginAPI.player.motionY += 1;
PluginAPI.player.reload();
```

Frequent calls to `reload()` may cause lag, so try to limit them.