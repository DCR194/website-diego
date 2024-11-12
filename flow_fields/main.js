class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.history = [];
    this.pastHistory = [];
    this.maxLength = 50;
    this.angle = 0;
  }

  update(noise) {
    this.history.push({ x: this.x, y: this.y });

    if (this.history.length + this.pastHistory.length > this.maxLength) {
      this.history.shift();
    }
    if (this.pastHistory.length != 0) {
      this.pastHistory.shift();
    }

    this.angle = noise * Math.PI * 2;

    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    if (this.x < 0) {
      this.x = window.innerWidth;
      this.pastHistory = this.history;
      this.history = [];
      this.history.push({ x: this.x, y: this.y });
    }
    if (this.x > window.innerWidth) {
      this.x = 0;
      this.pastHistory = this.history;
      this.history = [];
      this.history.push({ x: this.x, y: this.y });
    }
    if (this.y < 0) {
      this.y = window.innerHeight;
      this.pastHistory = this.history;
      this.history = [];
      this.history.push({ x: this.x, y: this.y });
    }
    if (this.y > window.innerHeight) {
      this.y = 0;
      this.pastHistory = this.history;
      this.history = [];
      this.history.push({ x: this.x, y: this.y });
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.history[0].x, this.history[0].y);

    for (let i = 0; i < this.history.length; i++) {
      ctx.lineTo(this.history[i].x, this.history[i].y);
    }

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';

    //ctx.stroke();


    // if (this.pastHistory.length > 1) {

    //   ctx.beginPath();
    //   ctx.moveTo(this.pastHistory[0].x, this.pastHistory[0].y);

    //   for (let i = 1; i < this.pastHistory.length; i++) {
    //     ctx.lineTo(this.pastHistory[i].x, this.pastHistory[i].y);
    //   }

    // }
    ctx.stroke();
  }
}

class FlowField {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.numParticles = 1000;
    this.noiseScale = 0.001;
    this.noiseZ = 10.1;

    this.resize();
    this.init();
    this.animate();

    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push(
        new Particle(
          Math.random() * this.canvas.width,
          Math.random() * this.canvas.height,
        ),
      );
    }
  }

  noise(x, y, z) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;

    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);

    const u = this.fade(x);
    const v = this.fade(y);
    const w = this.fade(z);

    const A = this.p[X] + Y;
    const AA = this.p[A] + Z;
    const AB = this.p[A + 1] + Z;
    const B = this.p[X + 1] + Y;
    const BA = this.p[B] + Z;
    const BB = this.p[B + 1] + Z;

    return this.lerp(
      w,
      this.lerp(
        v,
        this.lerp(
          u,
          this.grad(this.p[AA], x, y, z),
          this.grad(this.p[BA], x - 1, y, z),
        ),
        this.lerp(
          u,
          this.grad(this.p[AB], x, y - 1, z),
          this.grad(this.p[BB], x - 1, y - 1, z),
        ),
      ),
      this.lerp(
        v,
        this.lerp(
          u,
          this.grad(this.p[AA + 1], x, y, z - 1),
          this.grad(this.p[BA + 1], x - 1, y, z - 1),
        ),
        this.lerp(
          u,
          this.grad(this.p[AB + 1], x, y - 1, z - 1),
          this.grad(this.p[BB + 1], x - 1, y - 1, z - 1),
        ),
      ),
    );
  }

  fade(t) {
    //return t;
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  lerp(t, a, b) {
    return a + t * (b - a);
  }

  grad(hash, x, y, z) {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  p = new Array(512);

  generatePermutationTable() {
    const permutation = new Array(256).fill(0).map((_, i) => i);

    for (let i = 255; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
    }

    for (let i = 0; i < 512; i++) {
      this.p[i] = permutation[i & 255];
    }
  }

  animate() {
    this.ctx.fillStyle = 'black'; // Set fill color to black
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    /*
        this.ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);*/

    this.particles.forEach((particle) => {
      const noise =
        (this.noise(
          particle.x * this.noiseScale,
          particle.y * this.noiseScale,
          this.noiseZ,
        ) +
          1) /
        2;

      particle.update(noise);
      particle.draw(this.ctx);
    });

    this.noiseZ += 0.001;
    requestAnimationFrame(() => this.animate());
  }
}

const flowField = new FlowField();
flowField.generatePermutationTable();
