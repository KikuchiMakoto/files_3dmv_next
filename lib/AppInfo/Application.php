<?php

declare(strict_types=1);

namespace OCA\Files3dMvNext\AppInfo;

use OCA\Files3dMvNext\Preview\RsdocxProvider;
use OCP\AppFramework\App;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\Preview\IPreviewManager;
use OCP\Util;

class Application extends App implements IBootstrap {
    public const APP_ID = 'files_3dmv_next';

    public function __construct(array $urlParams = []) {
        parent::__construct(self::APP_ID, $urlParams);
    }

    public function register(IRegistrationContext $context): void {
        // Register Preview Provider for RSDOCX native thumbnail extraction
        $context->registerPreviewProvider(
            RsdocxProvider::class,
            '/^(application\/vnd\.spaceclaim\.rsdocx|application\/vnd\.spaceclaim\.rsdoc|application\/octet-stream)(;+.*)*$/'
        );
    }

    public function boot(IBootContext $context): void {
        // Load the 3D Viewer script on files pages before OCA.Viewer initializes
        Util::addInitScript(self::APP_ID, 'files_3dmv_next');
        Util::addStyle(self::APP_ID, 'files_3dmv_next');
    }
}
