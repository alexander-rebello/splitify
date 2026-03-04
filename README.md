# Splitify Queue

A beautiful queue display extension for Spotify that shows your upcoming tracks in a native playlist-style interface.

## Features

- **Native Spotify Design**: Perfectly matches Spotify's native playlist interface
- **Interactive Queue Display**: View your entire upcoming queue with track details
- **Smart Navigation**: Click tracks to skip directly to them in the queue
- **Artist & Album Links**: Click artist or album names to navigate to their pages
- **Performance Optimized**: Progressive loading for fast rendering of large queues
- **Current Track Header**: Beautiful header showing the currently playing track
- **Hover Effects**: Authentic Spotify-style hover interactions with play buttons

## Installation

### Prerequisites

Before installing Splitify, you need to have Spicetify installed on your system.

- Visit [Spicetify Official Documentation](https://spicetify.app/) and follow the installation guide for your OS
- Make sure Spotify is installed and properly detected by Spicetify

### Manual Install (Recommended)

1. **Download the Latest Release**:
   - Go to the [Releases](https://github.com/alexander-rebello/splitify/releases) page
   - Download the latest `splitify.zip`

2. **Extract and Move the Folder**:
   - Extract the zip file
   - Copy the `splitify/splitify-dist/` folder to your Spicetify CustomApps directory:
     - **Windows**: `%APPDATA%\spicetify\CustomApps\`
     - **macOS**: `~/.config/spicetify/CustomApps/` or `$SPICETIFY_CONFIG/CustomApps/`
     - **Linux**: `~/.config/spicetify/CustomApps/` or `$XDG_CONFIG_HOME/.config/spicetify/CustomApps/`

3. **Enable the Custom App**:

   ```bash
   spicetify config custom_apps splitify
   spicetify apply
   ```

   > **Note:** Using the `config` command appends to the existing custom apps list. If you prefer manual setup, see the alternative method below.

### Alternative: Manual Config Edit

You can also manually edit your `config-xpui.ini` file in your Spicetify config directory:

```ini
[AdditionalOptions]
...
custom_apps = splitify
```

Then run:

```bash
spicetify apply
```

### Usage

Once installed and enabled, Splitify will display as a custom app in Spotify showing:

- Currently playing track with artwork and details
- Complete list of upcoming tracks in queue
- Interactive controls to skip to any track
- Links to artist and album pages

## Development

### Prerequisites

- **Node.js** 18+ and **npm**
- **Spicetify** installed and configured
- **Git** for version control

### Tech Stack

Built with:

- **React & TypeScript**: Modern component architecture
- **Spicetify Creator**: For building and packaging
- **Spicetify APIs**: For queue management and player control
- **SCSS Modules**: For scoped styling

### Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/alexander-rebello/splitify.git
   cd splitify
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run in Development Mode**:

   ```bash
   npm run watch
   ```

   This will automatically rebuild the extension whenever you make changes.

4. **Test Your Changes**:
   - The `watch` command rebuilds to your Spicetify extensions folder
   - Run `spicetify apply` in another terminal after making changes
   - Restart Spotify to see the updated extension

### Available Scripts

- `npm run build`: Build the extension for production
- `npm run build-local`: Build with minification and local output to `dist/` folder
- `npm run watch`: Development mode with auto-rebuild on file changes

### Project Structure

```
src/
├── app.tsx              # Main extension component
├── extensions/          # Additional extension modules
├── css/                 # Stylesheets (SCSS modules)
├── types/               # TypeScript type definitions
└── settings.json        # Extension configuration
```

## Contributing

Feel free to submit issues and pull requests to improve the extension.

## License

MIT License
