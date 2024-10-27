# vieteri.github.io

This is a static website built using Jekyll and Ruby.
Follow the instructions below to set up and run the project locally.


## Portfolio

The purpose of this repository is to be my portfolio.
Feel free to comment or contact me based on the repository or if you're interested in some kind of working opportunity with me.


## Installation

### Prerequisites

- **Ruby**: Ensure you have Ruby installed. You can check this by running `ruby -v` in your terminal.
- **Bundler**: Install Bundler by running `gem install bundler`.

### Steps

1. **Clone the repository**:
    ```sh
    git clone https://github.com/vieteri/vieteri.github.io.git
    cd vieteri.github.io
    ```

2. **Install dependencies**:
    ```sh
    bundle install
    ```

3. **Build the site and start the server**:
    ```sh
    bundle exec jekyll serve
    ```

4. **View the site**:
    Open your browser and go to `http://localhost:4000` to see the website.

## Deployment

To deploy the site, you can use GitHub Pages:

1. **Push your changes to the `main` branch**:
    ```sh
    git add .
    git commit -m "Your commit message"
    git push origin main
    ```

2. **Configure GitHub Pages**:
    - Go to your repository on GitHub.
    - Click on **Settings**.
    - Scroll down to the **Pages** section.
    - Under **Source**, select the `main` branch and `/ (root)` folder.
    - Click **Save**.

Your site should be live at `https://<your-username>.github.io`.

