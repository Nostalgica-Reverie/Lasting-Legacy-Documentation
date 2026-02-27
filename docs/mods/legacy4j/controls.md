# Controls
While Legacy4J can still play in a similar manner to vanilla Java Edition, there are differences that may affect or enhance gameplay.

## Controller Support

Legacy4J has built-in controller support, powered by isXander's fork of libsdl4j, same as [Controlify](https://github.com/isXander/controlify).

### Inventory Management

- By default, double click functionality is disabled, like in older versions of Java Edition. This, ironically, can actually make inventory management faster, since some Quick Move actions can overlap and cause unintended inputs.
- Distributing items with a controller is done by toggling with the Left Trigger, like on LCE
- Bundles can be navigated by pushing the Right Stick up and down.

### Linear Camera Movement
Legacy Console Edition used an exponential response curve for camera movement, allowing more precise movement when closer to the stick's center, but slows movement on the diagonals. A linear response curve (like what Bedrock Edition uses) can fix this, sacrificing this precision.

### Force Active Window

This can be enabled in `Game Options` to allow controllers to send input to the game without the Minecraft window being focused.

### Virtual Cursor

The `Virtual Cursor` is used in order for the controller to have cursor input independently of the system's mouse cursor input. This is especially useful when using multiple instances with multiple controllers, or using a controller to play on a second monitor while interacting with content on the primary monitor.

**Inventory Bounds**

With `Virtual Cursor` enabled, `Limit Cursor to Inventory Bounds` is self-explanatory: the cursor will be limited to the bounds of the container interface.

## Key Binds
Keyboard and Mouse input acts mostly the same as it would on normal Java Edition, but with slight differences.

Here's a few pro tips:
- In some menus (like Options menus), `X` and `O` are used in place of what `X` and `Y` would be on an Xbox gamepad, for example
- Inventory management is split between the Survival Inventory and the Creative Inventory/Crafting Interface. In Legacy4J, the keybinds for these are `I` and `E` by default, respectively
