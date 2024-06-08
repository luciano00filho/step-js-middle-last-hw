export class Utils {
    static $ = vid => document.getElementById(vid) || document.querySelector(vid) || document.querySelectorAll(vid);
}