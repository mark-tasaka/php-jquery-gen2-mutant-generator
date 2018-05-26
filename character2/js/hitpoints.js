      /*
getHitsPoints (rover, add1, add2) - retreives the number of hit points that the rover will have based on their level (rover), stamina modifier (add1) and Lucky Sign (add2).  Luck Modifer applies if Bountiful Harvest luck sign is present.
*/
function hitPoints (rover, add1, add2) {
	var hd = rover.hd;
	var level = rover.level;
	var hitPoints = 0;
	var zeroLevelHitPoints = Math.floor((Math.random() * 4) + 1) + add1 + add2;
	var hitPointsEachLevel = Math.floor((Math.random() * 6) + 1) + add1 + add2;
	
	if (level === 1) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel;
		if (hitPoints <= 3) {
			hitPoints = 4;
		}
	}	
	else if (level === 2) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 6) {
			hitPoints = 7;
		}
	}
	else if (level === 3) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 9) {
			hitPoints = 10;
		}
	}
	else if (level === 4) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 11) {
			hitPoints = 12;
		}
	}
	else if (level === 5) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel
		 + hitPointsEachLevel;
		if (hitPoints <= 13) {
			hitPoints = 14;
		}
	}
	else if (level === 6) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel
		 + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 15) {
			hitPoints = 16;
		}
	}
	else if (level === 7) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel
		 + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 17) {
			hitPoints = 18;
		}
	}
	else if (level === 8) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel
		 + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 19) {
			hitPoints = 20;
		}
	}
	else if (level === 9) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel
		 + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 21) {
			hitPoints = 22;
		}
	}
	else if (level === 10) {
		hitPoints = zeroLevelHitPoints + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel
		 + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel + hitPointsEachLevel;
		if (hitPoints <= 23) {
			hitPoints = 24;
		}
	}
	return hitPoints;
}	  

	  	  