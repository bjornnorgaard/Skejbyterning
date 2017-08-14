"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppGameComponent = (function () {
    function AppGameComponent(database) {
        this.database = database;
        this.numbers = [2, 3, 4, 5, 6];
        this.items = database.list('/game', {
            query: {
                limitToLast: 50
            }
        });
    }
    // For debugging only
    // noinspection JSUnusedGlobalSymbols
    AppGameComponent.prototype.send = function () {
        var thing = {
            title: 'This is the title',
            subtitle: 'Some subtitle',
            image: '../../../assets/dice.jpg',
            content: [
                'one',
                'two',
                'three',
            ],
        };
        this.items.push({ card: thing });
    };
    AppGameComponent.prototype.numberOfPlayersSelected = function (number) {
        this.players = number;
    };
    AppGameComponent.prototype.okButtonClicked = function () {
        if (!this.players) {
            return;
        }
    };
    return AppGameComponent;
}());
AppGameComponent = __decorate([
    core_1.Component({
        selector: 'app-app-game',
        templateUrl: './app-game.component.html',
        styleUrls: ['./app-game.component.scss']
    })
], AppGameComponent);
exports.AppGameComponent = AppGameComponent;
