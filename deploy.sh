echo "Switching to branch master"
git checkout main

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -i /home/asad/Downloads/LightsailDefaultKey-eu-central-3.pem -r build/* ubuntu@18.153.81.51:/var/www/azamjonov.eu/

echo "Done!"


