
const LEFT = 'left';
const RIGHT = 'right';
const CENTER = 'center';

const SERVO_SIGNAL_PIN = 10;    // GPIO10, Pin #19

// TODO: fix and adapt values to the servo motor
const PWM_DUTY_CYLE_LEFT = 70;
const PWM_DUTY_CYLE_CENTER = 160;
const PWM_DUTY_CYLE_RIGHT = 250;


/**
 * The steering unit handles the left/right movement of the rover.
 */
class SteeringUnit {

    constructor(gpio) {
        this.servoSignal = new gpio(SERVO_SIGNAL_PIN, {mode: gpio.OUTPUT});
    }

    /**
     * The servo motor is controlled with pulse with modulation (PWM).
     *
     * Gpio.pwmWrite(dutyCycle)
     * dutyCycle: integer between 0 (off) and 255 (fully on)
     * Uses DMA to control and schedule the pulse lengths and duty cycle
     * See https://github.com/fivdi/pigpio/blob/master/doc/gpio.md#pwmwritedutycycle
     */
    steer(direction) {
        switch (direction) {
            case LEFT:
                this.servoSignal.pwmWrite(PWM_DUTY_CYLE_LEFT);
                break;
            case CENTER:
                this.servoSignal.pwmWrite(PWM_DUTY_CYLE_CENTER);
                break;
            case RIGHT:
                this.servoSignal.pwmWrite(PWM_DUTY_CYLE_RIGHT);
                break;
        }
    }

    static get LEFT() { return LEFT; }
    static get RIGHT() { return RIGHT; }
    static get CENTER() { return CENTER; }
}

module.exports = SteeringUnit;