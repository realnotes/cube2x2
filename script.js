var cube = {
  top: [
    ["white", "white"],
    ["white", "white"],
  ],
  left: [
    ["orange", "orange"],
    ["orange", "orange"],
  ],
  front: [
    ["green", "green"],
    ["green", "green"],
  ],
  right: [
    ["red", "red"],
    ["red", "red"],
  ],
  back: [
    ["blue", "blue"],
    ["blue", "blue"],
  ],
  bottom: [
    ["yellow", "yellow"],
    ["yellow", "yellow"],
  ],
}

var nextCube = {
  top: [
    ["white", "white"],
    ["white", "white"],
  ],
  left: [
    ["orange", "orange"],
    ["orange", "orange"],
  ],
  front: [
    ["green", "green"],
    ["green", "green"],
  ],
  right: [
    ["red", "red"],
    ["red", "red"],
  ],
  back: [
    ["blue", "blue"],
    ["blue", "blue"],
  ],
  bottom: [
    ["yellow", "yellow"],
    ["yellow", "yellow"],
  ],
}

const webCube = {
  top: [
    [document.getElementById("top00"), document.getElementById("top01")],
    [document.getElementById("top10"), document.getElementById("top11")],
  ],
  left: [
    [document.getElementById("left00"), document.getElementById("left01")],
    [document.getElementById("left10"), document.getElementById("left11")],
  ],
  front: [
    [document.getElementById("front00"), document.getElementById("front01")],
    [document.getElementById("front10"), document.getElementById("front11")],
  ],
  right: [
    [document.getElementById("right00"), document.getElementById("right01")],
    [document.getElementById("right10"), document.getElementById("right11")],
  ],
  back: [
    [document.getElementById("back00"), document.getElementById("back01")],
    [document.getElementById("back10"), document.getElementById("back11")],
  ],
  bottom: [
    [document.getElementById("bottom00"), document.getElementById("bottom01")],
    [document.getElementById("bottom10"), document.getElementById("bottom11")],
  ],
}

function setCube() {
  for (const face in cube) {
    webCube[face][0][0].style["background-color"] = cube[face][0][0]
    webCube[face][0][1].style["background-color"] = cube[face][0][1]
    webCube[face][1][0].style["background-color"] = cube[face][1][0]
    webCube[face][1][1].style["background-color"] = cube[face][1][1]
  }
}

function clockwise(face) {
  return [
    [cube[face][1][0], cube[face][0][0]],
    [cube[face][1][1], cube[face][0][1]],
  ]
}
function counterclockwise(face) {
  return [
    [cube[face][0][1], cube[face][1][1]],
    [cube[face][0][0], cube[face][1][0]],
  ]
}
function flip(face) {
  return [
    [cube[face][1][1], cube[face][1][0]],
    [cube[face][0][1], cube[face][0][0]],
  ]
}

function up() {
  return {
    top: cube.front,
    front: cube.bottom,
    bottom: flip('back'),
    back: flip('top'),
    right: clockwise("right"),
    left: counterclockwise("left"),
  }
}
function down() {
  return {
    top: flip('back'),
    front: cube.top,
    bottom: cube.front,
    back: flip('bottom'),
    right: counterclockwise("right"),
    left: clockwise("left"),
  }
}
function right() {
  return {
    left: cube.back,
    front: cube.left,
    right: cube.front,
    back: cube.right,
    top: counterclockwise("top"),
    bottom: clockwise("bottom"),
  }
}
function left() {
  return {
    left: cube.front,
    front: cube.right,
    right: cube.back,
    back: cube.left,
    top: clockwise("top"),
    bottom: counterclockwise("bottom"),
  }
}

function u() {
  return {
    bottom: cube.bottom,
    top: clockwise("top"),
    left: [cube.front[0], cube.left[1]],
    front: [cube.right[0], cube.front[1]],
    right: [cube.back[0], cube.right[1]],
    back: [cube.left[0], cube.back[1]],
  }
}
function uprime() {
  return {
    bottom: cube.bottom,
    top: counterclockwise("top"),
    left: [cube.back[0], cube.left[1]],
    front: [cube.left[0], cube.front[1]],
    right: [cube.front[0], cube.right[1]],
    back: [cube.right[0], cube.back[1]],
  }
}
function d() {
  return {
    top: cube.top,
    bottom: clockwise("bottom"),
    left: [cube.left[0], cube.back[1]],
    front: [cube.front[0], cube.left[1]],
    right: [cube.right[0], cube.front[1]],
    back: [cube.back[0], cube.right[1]],
  }
}
function dprime() {
  return {
    top: cube.top,
    bottom: counterclockwise("bottom"),
    left: [cube.left[0], cube.front[1]],
    front: [cube.front[0], cube.right[1]],
    right: [cube.right[0], cube.back[1]],
    back: [cube.back[0], cube.left[1]],
  }
}
function r() {
  return {
    left: cube.left,
    right: clockwise("right"),
    top: [
      [cube.top[0][0], cube.front[0][1]],
      [cube.top[1][0], cube.front[1][1]],
    ],
    front: [
      [cube.front[0][0], cube.bottom[0][1]],
      [cube.front[1][0], cube.bottom[1][1]],
    ],
    bottom: [
      [cube.bottom[0][0], cube.back[1][0]],
      [cube.bottom[1][0], cube.back[0][0]],
    ],
    back: [
      [cube.top[1][1], cube.back[0][1]],
      [cube.top[0][1], cube.back[1][1]],
    ],
  }
}
function rprime() {
  return {
    left: cube.left,
    right: counterclockwise("right"),
    bottom: [
      [cube.bottom[0][0], cube.front[0][1]],
      [cube.bottom[1][0], cube.front[1][1]],
    ],
    back: [
      [cube.bottom[1][1], cube.back[0][1]],
      [cube.bottom[0][1], cube.back[1][1]],
    ],
    top: [
      [cube.top[0][0], cube.back[1][0]],
      [cube.top[1][0], cube.back[0][0]],
    ],
    front: [
      [cube.front[0][0], cube.top[0][1]],
      [cube.front[1][0], cube.top[1][1]],
    ],
  }
}
function l() {
  return {
    right: cube.right,
    left: clockwise("left"),
    bottom: [
      [cube.front[0][0], cube.bottom[0][1]],
      [cube.front[1][0], cube.bottom[1][1]],
    ],
    back: [
      [cube.back[0][0], cube.bottom[1][0]],
      [cube.back[1][0], cube.bottom[0][0]],
    ],
    top: [
      [cube.back[1][1], cube.top[0][1]],
      [cube.back[0][1], cube.top[1][1]],
    ],
    front: [
      [cube.top[0][0], cube.front[0][1]],
      [cube.top[1][0], cube.front[1][1]],
    ],
  }
}
function lprime() {
  return {
    right: cube.right,
    left: counterclockwise("left"),
    top: [
      [cube.front[0][0], cube.top[0][1]],
      [cube.front[1][0], cube.top[1][1]],
    ],
    front: [
      [cube.bottom[0][0], cube.front[0][1]],
      [cube.bottom[1][0], cube.front[1][1]],
    ],
    bottom: [
      [cube.back[1][1], cube.bottom[0][1]],
      [cube.back[0][1], cube.bottom[1][1]],
    ],
    back: [
      [cube.back[0][0], cube.top[1][0]],
      [cube.back[1][0], cube.top[0][0]],
    ],
  }
}
function f() {
  return {
    back: cube.back,
    front: clockwise("front"),
    top: [
      [cube.top[0][0], cube.top[0][1]],
      [cube.left[1][1], cube.left[0][1]],
    ],
    right: [
      [cube.top[1][0], cube.right[0][1]],
      [cube.top[1][1], cube.right[1][1]],
    ],
    bottom: [
      [cube.right[1][0], cube.right[0][0]],
      [cube.bottom[1][0], cube.bottom[1][1]],
    ],
    left: [
      [cube.left[0][0], cube.bottom[0][0]],
      [cube.left[1][0], cube.bottom[0][1]],
    ],
  }
}
function fprime() {
  return {
    back: cube.back,
    front: counterclockwise("front"),
    top: [
      [cube.top[0][0], cube.top[0][1]],
      [cube.right[0][0], cube.right[1][0]],
    ],
    right: [
      [cube.bottom[0][1], cube.right[0][1]],
      [cube.bottom[0][0], cube.right[1][1]],
    ],
    bottom: [
      [cube.left[0][1], cube.left[1][1]],
      [cube.bottom[1][0], cube.bottom[1][1]],
    ],
    left: [
      [cube.left[0][0], cube.top[1][1]],
      [cube.left[1][0], cube.top[1][0]],
    ],
  }
}
function b() {
  return {
    front: cube.front,
    back: clockwise("back"),
    top: [
      [cube.right[0][1], cube.right[1][1]],
      [cube.top[1][0], cube.top[1][1]],
    ],
    right: [
      [cube.right[0][0], cube.bottom[1][1]],
      [cube.right[1][0], cube.bottom[1][0]],
    ],
    bottom: [
      [cube.bottom[0][0], cube.bottom[0][1]],
      [cube.left[0][0], cube.left[1][0]],
    ],
    left: [
      [cube.top[0][1], cube.left[0][1]],
      [cube.top[0][0], cube.left[1][1]],
    ],
  }
}
function bprime() {
  return {
    front: cube.front,
    back: counterclockwise("back"),
    top: [
      [cube.left[1][0], cube.left[0][0]],
      [cube.top[1][0], cube.top[1][1]],
    ],
    right: [
      [cube.right[0][0], cube.top[0][0]],
      [cube.right[1][0], cube.top[0][1]],
    ],
    bottom: [
      [cube.bottom[0][0], cube.bottom[0][1]],
      [cube.right[1][1], cube.right[0][1]],
    ],
    left: [
      [cube.bottom[1][0], cube.left[0][1]],
      [cube.bottom[1][1], cube.left[1][1]],
    ],
  }
}


document.addEventListener("keydown", function (event) {
  if (event.keyCode == 69 || event.keyCode == 73) {
    cube = up()
    setCube()
  } else if (event.keyCode == 68 || event.keyCode == 75) {
    cube = down()
    setCube()
  } else if (event.keyCode == 80) {
    cube = right()
    setCube()
  } else if (event.keyCode == 81) {
    cube = left()
    setCube()
  } else if (event.keyCode == 78) {
    cube = r()
    setCube()
  } else if (event.keyCode == 89) {
    cube = rprime()
    setCube()
  } else if (event.keyCode == 84) {
    cube = l()
    setCube()
  } else if (event.keyCode == 86) {
    cube = lprime()
    setCube()
  } else if (event.keyCode == 85) {
    cube = u()
    setCube()
  } else if (event.keyCode == 82) {
    cube = uprime()
    setCube()
  } else if (event.keyCode == 83) {
    cube = d()
    setCube()
  } else if (event.keyCode == 76) {
    cube = dprime()
    setCube()
  } else if (event.keyCode == 72) {
    cube = f()
    setCube()
  } else if (event.keyCode == 71) {
    cube = fprime()
    setCube()
  } else if (event.keyCode == 87) {
    cube = b()
    setCube()
  } else if (event.keyCode == 79) {
    cube = bprime()
    setCube()
  }
})

setCube()
