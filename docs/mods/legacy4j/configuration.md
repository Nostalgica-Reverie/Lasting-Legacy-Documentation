# Configuration
While much of Legacy4J's Settings can be navigated in the same way as on the original Legacy Console Edition, there are a lot of fundamental differences due to the amount of options available from vanilla Java Edition and L4J compared to LCE.

## Show Advanced Options
Many of the options categories will show a `Show Advanced Options` tooltip on the bottom corner if Advanced Options are available. This will give you access to options not available at the top-level options screen.

## Legacy4J Options
This houses all the options accessible through the Options and Advanced Options pages provided by L4J. <br>
Legacy4J Options can be accessed by pressing the `Y` key (by default) in a world or on the main menu, or by going to the mod's configuration page in the Mod Menu. 
<br>
<br>
<br>

# Options
Below is a list of all options (Vanilla or Legacy4J) accessible in `Help & Options > Settings` and the Legacy4J Options screen, with explanations on their function. <br>
Pages prefixed with "Advanced" are Advanced Options pages, and can be accessed in the Settings menus by activating `Show Advanced Options` with the provided key, or by clicking the tooltip.

## Game Options
#### Auto-Jump
Allows the player to automatically jump when approaches a block with a block of air above it.
#### View Bobbing
Displays bobbing animations for the viewmodel hand and camera.
#### Hints
Displays hints for newly discovered blocks and items when in-game.
#### Flying View Rolling
Allows the camera to have a "rolling" animation when flying with an Elytra.
#### Autosave Interval
Adjusts the amount of time between autosaves in five minute intervals. OFF disables autosave, and will fallback to manual saving if [Save Cache](#save-cache) is enabled.
#### Languages
Opens the language selection screen
#### Mods
Opens the mod menu.

## Advanced Game Options
### In-Game Settings
#### Force Active Window
Allows an assigned gamepad to control the game, even when the window is unfocused.
#### Inverted Front Camera Pitch
Makes the player's head look towards the camera when in the Third Person Front camera mode.
#### Head Follows The Camera
Makes the player's head lock to the camera position, rather than lagging behind.
#### Vehicle Camera Rotation
Allows the camera to rotate with certain types of entities:
- NONE - The camera will not rotate when on any mount.
- All Entities - The camera will rotate when on any mount.
- Only Non-Living Entities - The camera will only rotate when on a non-living entity, such as a Minecart.
- Only Living Entities - The camera will only rotate when on a living entity, such as a Horse or Llama.
#### Rotate with Minecarts
This option only applies to worlds with the [Minecart Improvements](https://minecraft.wiki/w/Minecart_Improvements) data pack enabled. This will not affect Legacy4J's Vehicle Camera Rotation in worlds without it installed.
#### Legacy Creative Block Placing
Allows block placement in Creative Mode to match the speed of the player.
#### Maps With Coordinates
Displays coordinate information on any Map item.
#### Vanilla Tutorial
Displays the tutorial pop-ups from vanilla (i.e. "Press WASD to move")
#### Legacy Sword Blocking
Enables sword blocking mechanics.
#### Squared View Distance
Allows chunks on the edge of Render Distance to render in a square shape, rather than a circle.
#### Legacy Combat
Adjusts various tool and weapon attributes and disables weapon cooldowns.

### User Interface Settings
#### Skip Intro
Skips the intro sequence once the game is finished loading.
#### Skip Initial Save Warning
Skips the "This game has a level autosave feature." screen shown after the intro sequence.
#### Lock Control Type Change
Prevents the `Java Edition` Control Type taking over when using a Keyboard & Mouse.
#### Control Type
Changes the Control Icons and Minecraft logo (if available).
#### Cursor Mode
This option controls how the mouse cursor should be shown
- `Auto` shows the cursor when mouse movement is detected, and hides when navigating with the keyboard or gamepad
- `Always` will show the cursor regardless of input
- `Never` will hide the cursor in any user interface where it isn't used by a controller (i.e. the cursor will still show in the Inventory, but not in Crafting)
#### Default Show Craftable Recipes
Determines if `Show Craftable Recipes` is shown first when opening a Legacy Crafting interface.

### Accessibility Settings
#### Notification Time
Determines the length of notification pop-ups (such as Advancement toasts).
#### Panorama Scroll Speed
Adjusts the speed of the panorama. Affects both the Vanilla and Legacy Panorama.
#### Narrator
Allows the narrator to narrate various parts of the user interface.
#### Narrator Hotkey
Allows the `Ctrl`+`B` keyboard shortcut for toggling the narrator.
#### Monochrome Logo
Makes the background for the loading screen black instead of red. Only works if [Legacy Loading & Reloading](./configuration#legacy-intro-reloading) is disabled.
#### High Contrast
Enables the High Contrast resource pack.
#### Hide Sky Flashes
Prevents Lightning Bolts or other environmental effects from making the sky flash. The sources of flashes themselves will still be visible.
#### Damage Tilt
Adjusts the intensity of the camera tilt from taking damage.
#### Distortion Effects
Adjusts the intensity of the Nether Portal and Nausea camera effects.
#### FOV Effects
Adjusts the intensity of various field-of-view gameplay effects, such as sprinting and potion effects.
#### Darkness Pulsing
Adjusts the intensity of the Darkness effect given by a Warden or Sculk Shrieker.
#### Glint Speed
Adjusts the speed of the enchantment glint.
#### Glint Strength
Adjusts the intensity of the enchantment glint.

### Save Settings
#### Autosave When Paused
Allows autosaves to trigger when pausing the game.
#### Load Save Directly
Allows joining a world without showing the `Load Save` screen.
#### Save Cache
Enables the manual saving system.

### Miscellaneous
#### Realms News & Invites
Toggles Realms notifications.
#### Allow Server Listings
Servers may list online players as part of the public status. With this option off, your name will not show up in such lists.
#### Reset Known Blocks
Resets the list of blocks already shown as an in-game hint.
#### Reset Known Entities
Resets the list of entities already shown as an in-game hint.

## Audio
#### Music
Adjusts the volume for background music.
#### Sound (Master Volume)
Adjusts the volume for all in-game content, including background music.
#### Cave Sounds
Toggles whether ambient cave sounds can be heard.
#### Minecart Sounds
Toggles whether Minecart travelling sounds can be heard.

## Advanced Audio
#### Device
Sets the audio output for the game.
#### Back Sound
Toggles whether a sound is played when backing out of interfaces.
#### Hover Focus Sound
Toggles whether the navigation sound is heard when hovering over UI elements with the mouse.
#### Inventory Hover Focus Sound
Toggles whether the navigation sound is heard when navigating within an inventory or container UI.
#### Closed Captions
Toggles whether subtitles are shown in the UI.
#### Directional Audio
Uses HRTF-based directional audio to improve the simulation of 3D sound. Requires HRTF compatible audio hardware, and is best experienced with headphones.
#### Music Frequency
Adjusts the frequency of the background music.
#### Show Music Toast
Shows a notification when a new background music track plays, with the song artist and title.
#### Jukebox/Note Blocks
Adjusts volume for the Jukebox and Note Blocks
#### Weather
Adjusts volume for various weather events.
#### Blocks
Adjusts volume for various block interactions.
#### Hostile Mobs
Adjusts volume for hostile mobs.
#### Friendly Mobs
Adjusts volume for passive mobs and non-living entities.
#### Players
Adjusts volume for player interactions (such as damage and item pickup).
#### Ambient/Environment
Adjusts volume for various ambient sounds, entering/exiting water, and fireworks.
#### Narrator/Voice
Adjusts volume for the narrator.
#### UI
Adjusts volume for user interface interactions.

## Graphics
#### Clouds
#### Preset
#### Display Gamma
#### Gamma
#### Brightness
#### Smooth Lighting
#### Global Resource Packs
#### Resource Albums

## Advanced Graphics
### Video Settings
#### Fullscreen Resolution
#### Fullscreen
#### Graphics
#### VSync
#### Max Framerate
#### FOV
#### Reduce FPS when
#### Render Distance
#### Simulation Distance
#### Cloud Distance
#### Chunk Builder
#### Biome Blend
#### Entity Distance
#### Entity Shadows

### Legacy Settings
#### Override Terrain Fog Start
#### Terrain Fog Start
#### Override Terrain Fog End
#### Terrain Fog End
#### Legacy Sky Shape
#### Fast Leaves When Blocked
#### Fast Leaves Custom Models
#### Display Name Tag Border
#### Display Held Item Lighting
#### Enhanced Item Translucency
#### Display Loyalty Effects
#### Display Trading Icon
#### Legacy Baby Villager Head
#### Legacy Fireworks
#### Legacy Evoker Fangs
#### Legacy Drowned Animation
#### Legacy Entity Fire Tint
#### Legacy Item Pickup
#### Enhanced Piston Moving Renderer
#### Legacy Potions Bar
#### Default Particle Physics
#### Bubbles Outside Weather
#### Nearest Mipmap Scaling
#### Mipmap Levels

### Mixins
#### Legacy Enchanting Screen
#### Legacy Classic Merchant Screen
#### Legacy Container-like Screen
#### Legacy Boss Health
#### Legacy Title Screen
#### Legacy Brewing Stand Screen
#### Legacy Cartography Screen
#### Legacy Pause Screen
#### Legacy Classic Stonecutter Screen
#### Legacy Gui
#### Legacy Witches
#### Legacy Book Screen
#### Legacy Crafter Screen
#### Legacy Drowned
#### Legacy Classic Loom Screen
#### Legacy Beacon Screen
#### Legacy Classic Crafting Screen
#### Legacy Create World Screen
#### Legacy Chat
#### Legacy Furnace Screen
#### Legacy Anvil Screen
#### Legacy Sign Screen
#### Legacy Pack Selection Screen
#### Legacy Smithing screen
#### Legacy Grindstone Screen
#### Legacy Inventory Screen

## User Interface
#### Display HUD
#### Display Hand
#### Display Save Icon
#### Display Vanilla Recipe Book
#### Display Tooltip Boxes
#### Attack Indicator
#### HUD Size 
#### Interface Opacity
#### Interface Distance
#### GUI Scale
#### UI Mode
#### Interface Sensitivity
#### Legacy Item Tooltips
#### Legacy Item Tooltips Scaling
#### In-Game Tooltips
#### Animated Character
#### Smooth Animated Character
#### Classic Crafting
#### Classic Stonecutting
#### Classic Loom
#### Classic Trading
#### Force Mixed Crafting
#### Mod Crafting Tabs
#### Display Vanilla Tabs
#### Search Creative Tab
#### Operator Items Tab
#### Vignette
#### Display Control Tooltips

## Advanced User Interface
### In-Game Settings
#### Display Inverted Crosshair
#### Legacy Creative Interface
#### Legacy Advancements Interface
#### Leaderboards Interface
#### Legacy Overstacked Items
#### Legacy Health Flash
#### HUD Load Delay
#### Display System Messages As OVerlay
#### Autosave Countdown
#### Advanced Held Item Tooltip
#### Selected Item Tooltip Ellipsis
#### Selected Item Tooltip Lines
#### Selected Item Tooltip Spacing
#### Control Tooltip Display
### Menu Settings
#### Title Screen Fade
#### Title Screen Version Text
#### Menus With Background
#### Legacy Intro & Reloading
#### Legacy Loading & Connecting
#### Legacy Panorama
#### Fake Autosave Screen
### Chat Settings
#### Reduced Debug Information
#### Chat
#### Chat Text Opacity
#### Text Background Opacity
#### Chat Text Size
#### Line Spacing
#### Chat Delay
#### Width
#### Focused Height
#### Unfocused Height
#### Colors
#### Web Links
#### Prompt on Links
#### Text Background
#### Command Suggestions
#### Hide Matches Names
#### Only Show Secure Chat
