<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitcdc0e1c23249fcabd776f6ad48abfd3f
{
    public static $classMap = array (
        'SimpleMail' => __DIR__ . '/..' . '/eoghanobrien/php-simple-mail/class.simple_mail.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInitcdc0e1c23249fcabd776f6ad48abfd3f::$classMap;

        }, null, ClassLoader::class);
    }
}