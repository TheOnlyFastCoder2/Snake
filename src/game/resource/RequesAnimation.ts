class RequesAnimation  {
  public frameID: number = 0;
  private timer:number = 0;

  private callback: Function;
  private updateFrequency:number;
  private readonly updateFrequencyStep:number;

  private totalTime:number = 0;
  private startTime:number = Date.now();
  private isCanvasVisible = true;

  constructor (
    freq:number, 
    freqStep:number,
    callback:Function
  ) 
  { 
    this.callback = callback;
    this.updateFrequency = freq;
    this.updateFrequencyStep = freqStep;
  }

  getStart() {this.isCanvasVisible = true;}
  getStop() {this.isCanvasVisible = false;}
  
  setSpeedUp () {this.updateFrequency -= this.updateFrequencyStep; }
  setSpeedDown () {this.updateFrequency += this.updateFrequencyStep; }
  
  toFixFloat(digit: number):number {
    return +`${digit}`.replace(/\..*/i, '');
  }
  get getSeconds () {
    return this.toFixFloat((this.totalTime / 1000) % 60);
  }

  get getMinutes () {
    return this.toFixFloat((this.totalTime / 1000 / 60) % 60);
  }
  
  get getHouse () {
    return this.toFixFloat((this.totalTime / 1000 / 60 / 60) % 24);
  }

  toBindContextToCallback() {
    this.callback = this.callback.bind(null, this);
  }

  winTarget() {
    window.onfocus = () => {
      this.getStart();
      this.toStartFrame();
      
    }
    window.onblur = () => {
      this.cancelFrameAnimation();
      this.getStop();
    }
  } 
  
  cancelFrameAnimation () {
    cancelAnimationFrame(this.frameID)
  }

  toStartFrame()  {
    const deltaTime = (Date.now() - this.startTime) - this.totalTime;
    this.totalTime = deltaTime + this.totalTime;


    if(this.isCanvasVisible) {
      this.update(deltaTime,this.callback);
    }
  
    this.frameID = window.requestAnimationFrame(
      this.toStartFrame.bind(this)
    );
  }

  private update(deltaTime: number, callback:Function) {
    this.timer += deltaTime / 1000; 
    if(this.timer > this.updateFrequency) {
      this.timer -= this.updateFrequency;
      callback();
    }
  }
}

export default RequesAnimation