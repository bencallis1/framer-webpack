{ InputField } = require 'inputField'

# setup device for presentation
device = new Framer.DeviceView();

device.setupContext()
device.deviceType = "google-nexus-6p"
device.contentScale = 1

deviceHeight = device.screen.height
deviceWidth = device.screen.width

# import sketch files here using either framer studio or framer generator

app = Framer.Importer.load("")

# variables to hold a scale value we’ll use later
initialScale = 0.2
