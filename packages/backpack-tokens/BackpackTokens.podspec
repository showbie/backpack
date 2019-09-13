Pod::Spec.new do |s|
  s.name = 'BackpackTokens'
  s.version = '0.2.3'
  s.license = { :type => 'ISC', :file => 'LICENSE.txt' }
  s.homepage = 'https://design.showbie.com'
  s.author = 'Showbie Inc.'
  s.summary = 'Design tokens for the Backpack design system at Showbie'
  s.source = { :git => 'https://github.com/showbie/backpack-tokens.git',
               :tag => "v#{s.version.to_s}" }
  s.swift_version = '4.2'
  s.ios.deployment_target = '10.0'
  s.source_files = 'dist/*.swift'
end
