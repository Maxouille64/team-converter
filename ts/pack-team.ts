	packTeam(team: PokemonSet[] | null): string {
		if (!team) return '';

		function getIv(ivs: StatsTable, s: keyof StatsTable): string {
			return ivs[s] === 31 || ivs[s] === undefined ? '' : ivs[s].toString();
		}

		let buf = '';
		for (const set of team) {
			if (buf) buf += ']';

			// name
			buf += (set.name || set.species);

			// species
			const id = toID(set.species || set.name);
			buf += '|' + (toID(set.name || set.species) === id ? '' : id);

			// item
			buf += '|' + toID(set.item);

			// ability
			buf += '|' + toID(set.ability);

			// moves
			buf += '|' + set.moves.map(toID).join(',');

			// nature
			buf += '|' + (set.nature || '');

			// evs
			let evs = '|';
			if (set.evs) {
				evs = '|' + (set.evs['hp'] || '') + ',' + (set.evs['atk'] || '') + ',' + (set.evs['def'] || '') + ',' + (set.evs['spa'] || '') + ',' + (set.evs['spd'] || '') + ',' + (set.evs['spe'] || '');
			}
			if (evs === '|,,,,,') {
				buf += '|';
			} else {
				buf += evs;
			}

			// gender
			if (set.gender) {
				buf += '|' + set.gender;
			} else {
				buf += '|';
			}

			// ivs
			let ivs = '|';
			if (set.ivs) {
				ivs = '|' + getIv(set.ivs, 'hp') + ',' + getIv(set.ivs, 'atk') + ',' + getIv(set.ivs, 'def') +
					',' + getIv(set.ivs, 'spa') + ',' + getIv(set.ivs, 'spd') + ',' + getIv(set.ivs, 'spe');
			}
			if (ivs === '|,,,,,') {
				buf += '|';
			} else {
				buf += ivs;
			}

			// shiny
			if (set.shiny) {
				buf += '|S';
			} else {
				buf += '|';
			}

			// level
			if (set.level && set.level !== 100) {
				buf += '|' + set.level;
			} else {
				buf += '|';
			}

			// happiness
			if (set.happiness !== undefined && set.happiness !== 255) {
				buf += '|' + set.happiness;
			} else {
				buf += '|';
			}

			if (set.pokeball || set.hpType || set.gigantamax) {
				buf += ',' + (set.hpType || '');
				buf += ',' + toID(set.pokeball || '');
				buf += ',' + (set.gigantamax ? 'G' : '');
			}
		}

		return buf;
	}
