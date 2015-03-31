module.exports = function(grunt) {
'use strict';

//------------------------------------------------------------------------------
// Animation Files
//------------------------------------------------------------------------------

function parseFrame(txt) {
  var lines = txt.split('\n'),
    frameNumber = lines.shift().trim();

  if (frameNumber === '') return;

  console.log("===== " + frameNumber);

  for (var y = 0; y < lines.length; y++) {
    var line = lines[y].split('');
    for (var x = 0; x < line.length; x++) {
      var ch = line[x];

      if (ch !== ' ') {
        console.log(ch +  ' [' + (x + 1) + ' ' + (y + 1) + ']');
      }
    }
  }
}

// this is a simple tool to help build the macro animations from text files
function analyzeAnimation() {
  // do nothing if an argument was not passed
  if (this.args.length === 0) {
    grunt.fail.warn('Please enter an argument to animation. ie: "grunt animation:foo"');
    return;
  }

  // filename
  var filename = 'animations/' + this.args[0] + '.txt';
  if (! grunt.file.exists(filename)) {
    grunt.fail.warn('Could not find ' + filename + '. Aborting...');
    return;
  }

  var fileContents = grunt.file.read(filename),
    frames = fileContents.split('=====');

  for (var i = 0; i < frames.length; i++) {
    parseFrame(frames[i]);
  }

  return;
}

//------------------------------------------------------------------------------
// Grunt Config
//------------------------------------------------------------------------------

grunt.initConfig({

  less: {
    options: {
      compress: true
    },

    watch: {
      files: {
        'public/css/main.min.css': 'less/main.less'
      }
    }
  },

  watch: {
    options: {
      atBegin: true
    },

    less: {
      files: "less/*.less",
      tasks: "less:watch"
    }
  }

});

// load tasks from npm
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('animation', analyzeAnimation);
grunt.registerTask('default', 'watch');

// end module.exports
};
