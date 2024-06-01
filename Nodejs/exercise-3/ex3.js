const say = require('say')

//use default system voice and speed
say.speak('Hello!')

//stop the text currently being spoken
say.stop()

//More complex example (with an OS X voice) and slow speed
say.speak("Hello?", 'Alex', 0.5)