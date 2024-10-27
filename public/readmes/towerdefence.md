# Tornipeli

This is a Tower Defense game developed as a software project for the CS-A1121 Ohjelmoinnin peruskurssi Y2 course using Python 3.


![Start Screen](/public/readmes/images/start_screen.png)

## About

In this game, monsters move along a fixed path and get stronger over time. Players can place towers that use lasers to damage the monsters. The game includes a graphical user interface (GUI) that shows the player's current gold balance, elapsed time, and remaining lives.

## Installation

### Prerequisites

- **Python 3**: Ensure you have Python 3 installed. You can check this by running `python3 --version` in your terminal.
- **Pygame**: Install the Pygame library by running:
    ```sh
    pip install pygame
    ```

### Steps

1. **Clone the repository**:
    ```sh
    git clone https://github.com/vieteri/Tornipeli.git
    cd Tornipeli
    ```

2. **Run the game**:
    ```sh
    python3 main.py
    ```

## Usage

- **Start the game**: Run `python3 main.py` to start the game.
- **Place towers**: Click on a tower icon and then click on an available spot (white square) to place the tower.
- **Earn gold**: Defeat monsters to earn gold, which can be used to place more towers.


![Game Screen](/public/readmes/images/game.png)


## Deployment

To deploy the game, you can package it using tools like `pyinstaller` to create an executable:

1. **Install pyinstaller**:
    ```sh
    pip install pyinstaller
    ```

2. **Create an executable**:
    ```sh
    pyinstaller --onefile main.py
    ```

3. **Distribute the executable**: The executable will be located in the `dist` folder. You can share this file with others to run the game without needing to install Python or Pygame.

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

