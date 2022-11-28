export const playerOptions = {
	defaultPlayIndex: 0,
	theme: 'auto',
	bounds: 'body',
	quietUpdate: false,
	clearPriorAudioLists: false,
	autoPlayInitLoadPlayList: false,
	preload: false,
	glassBg: false,
	remember: false,
	remove: false,
	defaultPosition: {
		right: 100,
		bottom: 120,
	},
	defaultPlayMode: 'order',
	mode: 'full',
	once: false,
	autoPlay: false,
	toggleMode: false,
	showMiniModeCover: true,
	showMiniProcessBar: false,
	drag: true,
	seeked: true,
	showMediaSession: true,
	showProgressLoadBar: true,
	showPlay: true,
	showReload: false,
	showDownload: false,
	showPlayMode: true,
	showThemeSwitch: false,
	showLyric: true,
	showDestroy: false,
	extendsContent: null,
	defaultVolume: 1,
	playModeShowTime: 600,
	loadAudioErrorPlayNext: true,
	autoHiddenCover: false,
	spaceBar: true,
	responsive: true,
	mobileMediaQuery: '(max-width: 1024px)',
	volumeFade: {
		fadeIn: 1000,
		fadeOut: 1000,
	},
	restartCurrentOnPrev: false,
	sortableOptions: {},
	// onAudioDownload(audioInfo) {
	// 	console.log('audio download', audioInfo);
	// },
	// onAudioPlay(audioInfo) {
	// 	console.log('audio playing', audioInfo);
	// },
	// onAudioPause(audioInfo) {
	// 	console.log('audio pause', audioInfo);
	// },
	// onAudioSeeked(audioInfo) {
	// 	console.log('audio seeked', audioInfo);
	// },
	// onAudioVolumeChange(currentVolume) {
	// 	console.log('audio volume change', currentVolume);
	// },
	// onAudioEnded(currentPlayId, audioLists, audioInfo) {
	// 	console.log('audio ended', currentPlayId, audioLists, audioInfo);
	// },

	// onAudioAbort(currentPlayId, audioLists, audioInfo) {
	// 	console.log('audio abort', currentPlayId, audioLists, audioInfo);
	// },

	// onAudioProgress(audioInfo) {},
	// onAudioReload(audioInfo) {
	// 	console.log('audio reload:', audioInfo);
	// },
	// onAudioError(errMsg, currentPlayId, audioLists, audioInfo) {
	// 	console.error('audio error', errMsg, currentPlayId, audioLists, audioInfo);
	// },

	// onAudioListsChange(currentPlayId, audioLists, audioInfo) {
	// 	console.log('audio lists change:', currentPlayId, audioLists, audioInfo);
	// },

	// onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
	// 	console.log('audio play track change:', currentPlayId, audioLists, audioInfo);
	// },
	// onAudioListsPanelChange(panelVisible) {
	// 	console.log('audio lists panel visible:', panelVisible);
	// },

	// onAudioListsSortEnd(oldIndex, newIndex) {
	// 	console.log('audio lists sort end:', oldIndex, newIndex);
	// },

	// onAudioLyricChange(lineNum, currentLyric) {
	// 	console.log('audio lyric change:', lineNum, currentLyric);
	// },
	// getContainer() {
	// 	return document.body;
	// },

	// getAudioInstance(audio) {
	// 	console.log('audio instance', audio);
	// },

	// onBeforeDestroy(currentPlayId, audioLists, audioInfo) {
	// 	console.log('onBeforeDestroy currentPlayId: ', currentPlayId);
	// 	console.log('onBeforeDestroy audioLists: ', audioLists);
	// 	console.log('onBeforeDestroy audioInfo: ', audioInfo);
	// 	return new Promise((resolve, reject) => {
	// 		// your custom validate
	// 		// eslint-disable-next-line no-alert
	// 		if (window.confirm('Are you confirm destroy the player?')) {
	// 			// if resolve, player destroyed
	// 			resolve();
	// 		} else {
	// 			// if reject, skip.
	// 			reject();
	// 		}
	// 	});
	// },

	// onDestroyed(currentPlayId, audioLists, audioInfo) {
	// 	console.log('onDestroyed:', currentPlayId, audioLists, audioInfo);
	// },

	// onCoverClick(mode, audioLists, audioInfo) {
	// 	console.log('onCoverClick: ', mode, audioLists, audioInfo);
	// },
};
