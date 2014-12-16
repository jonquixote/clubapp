var handle = LaunchScreen.hold();

Template.launch.rendered = function () {
  handle.release();
};